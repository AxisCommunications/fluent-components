#!/usr/bin/env bash
#
# Interactively add illustration mappings to the empty-view component.
# Scans the illustrations library for available Dark/Light pairs,
# shows which ones aren't yet mapped, and lets you select which to add.
#
# Usage: pnpm add-illustration
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
COMPONENT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
REPO_ROOT="$(cd "$COMPONENT_DIR/../.." && pwd)"

ILLUSTRATIONS_INDEX="$REPO_ROOT/illustrations/src/index.ts"
CONSTANTS_FILE="$COMPONENT_DIR/src/constants.ts"
TYPES_FILE="$COMPONENT_DIR/src/types.ts"

for f in "$ILLUSTRATIONS_INDEX" "$CONSTANTS_FILE" "$TYPES_FILE"; do
  if [[ ! -f "$f" ]]; then
    echo "Error: Cannot find $f" >&2
    exit 1
  fi
done

# Convert PascalCase to kebab-case
pascal_to_kebab() {
  echo "$1" | sed -E 's/([A-Z])/-\1/g' | sed 's/^-//' | tr '[:upper:]' '[:lower:]'
}

# --- Discover all illustration pairs from the index ---
all_dark=$(grep -oE '[A-Za-z]+Dark' "$ILLUSTRATIONS_INDEX" | sort -u)

bases=()
for dark_export in $all_dark; do
  base="${dark_export%Dark}"
  if grep -q "${base}Light" "$ILLUSTRATIONS_INDEX"; then
    bases+=("$base")
  fi
done

# --- Find which are already mapped in constants.ts ---
mapped_dark=$(grep -oE '[A-Za-z]+Dark' "$CONSTANTS_FILE" | sort -u)
mapped_bases=" "
for m in $mapped_dark; do
  mapped_bases="$mapped_bases${m%Dark} "
done

unmapped=()
for base in "${bases[@]}"; do
  if [[ "$mapped_bases" != *" $base "* ]]; then
    unmapped+=("$base")
  fi
done

if [[ ${#unmapped[@]} -eq 0 ]]; then
  echo "All illustrations are already mapped!"
  exit 0
fi

# --- Display unmapped illustrations ---
echo ""
echo "Unmapped illustrations (${#unmapped[@]}):"
echo ""
for i in "${!unmapped[@]}"; do
  printf "  %2d) %s\n" $((i + 1)) "${unmapped[$i]}"
done
echo ""
echo "Enter numbers to add (comma-separated, e.g. 1,3,5), 'all', or 'q' to quit:"
read -r selection

if [[ "$selection" == "q" ]]; then
  exit 0
fi

selected=()
if [[ "$selection" == "all" ]]; then
  selected=("${unmapped[@]}")
else
  IFS=',' read -ra nums <<< "$selection"
  for num in "${nums[@]}"; do
    num=$(echo "$num" | tr -d ' ')
    if [[ "$num" =~ ^[0-9]+$ ]] && (( num >= 1 && num <= ${#unmapped[@]} )); then
      selected+=("${unmapped[$((num - 1))]}")
    else
      echo "Warning: Ignoring invalid selection '$num'" >&2
    fi
  done
fi

if [[ ${#selected[@]} -eq 0 ]]; then
  echo "No illustrations selected."
  exit 0
fi

# --- Prompt for kebab-case keys ---
echo ""
echo "Confirm kebab-case keys (press Enter to accept suggestion):"
echo ""

additions=() # "base:key" pairs
for base in "${selected[@]}"; do
  suggested=$(pascal_to_kebab "$base")
  read -rp "  ${base}Dark/Light -> [${suggested}]: " custom
  key="${custom:-$suggested}"
  additions+=("${base}:${key}")
done

# --- Confirm ---
echo ""
echo "Will add:"
for entry in "${additions[@]}"; do
  base="${entry%%:*}"
  key="${entry#*:}"
  echo "  \"${key}\" -> bundleIllustrationSmart(${base}Dark, ${base}Light)"
done
echo ""
read -rp "Proceed? [Y/n]: " confirm
if [[ "${confirm:-Y}" =~ ^[Nn] ]]; then
  echo "Aborted."
  exit 0
fi

# --- Apply changes ---
for entry in "${additions[@]}"; do
  base="${entry%%:*}"
  key="${entry#*:}"

  # 1. Add imports to constants.ts (alphabetically sorted within the import block)
  # Find the right insertion point for Dark import
  dark_import="  ${base}Dark,"
  light_import="  ${base}Light,"
  # Use perl to insert imports in sorted position within the import block
  perl -i -pe "
    if (/^  (\w+),\$/ || /^  (\w+)Light,\$/ || /^  (\w+)Dark,\$/) {
      my \$line = \$_;
      chomp \$line;
      \$line =~ s/^  //;
      if (!defined \$inserted_dark && \$line gt \"${base}Dark,\") {
        print \"  ${base}Dark,\n\";
        \$inserted_dark = 1;
      }
      if (!defined \$inserted_light && \$line gt \"${base}Light,\") {
        print \"  ${base}Light,\n\";
        \$inserted_light = 1;
      }
    }
    if (/bundleIllustrationSmart/) {
      if (!defined \$inserted_dark) {
        print \"  ${base}Dark,\n\";
      }
      if (!defined \$inserted_light) {
        print \"  ${base}Light,\n\";
      }
    }
  " "$CONSTANTS_FILE"

  # 2. Add map entry to constants.ts (before "} as const;")
  sed -i '' "/^} as const;/i\\
  \"${key}\": bundleIllustrationSmart(${base}Dark, ${base}Light)," "$CONSTANTS_FILE"

  # 3. Add to IllustrationKind type in types.ts (multiline union, insert before ";")
  perl -i -0pe "s/(IllustrationKind\s*=\s*.*?)(;)/\${1}\n  | \"${key}\"\${2}/s" "$TYPES_FILE"
done

echo ""
echo "Added ${#additions[@]} illustration(s)."
echo ""
echo "Updated:"
echo "  $(basename "$TYPES_FILE")"
echo "  $(basename "$CONSTANTS_FILE")"
echo ""
echo "Run 'pnpm lint' to format and verify."
