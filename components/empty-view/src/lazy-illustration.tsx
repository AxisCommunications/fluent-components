import { ComponentType, LazyExoticComponent, Suspense, lazy } from "react";
import { illustrationLoaders } from "./constants.js";
import { IllustrationKind } from "./types.js";

type IllustrationProps = { className?: string };

function IllustrationPlaceholder({ className }: IllustrationProps) {
  return <div className={className} aria-hidden="true" />;
}

const lazyIllustrations = new Map<
  IllustrationKind,
  LazyExoticComponent<ComponentType<IllustrationProps>>
>();

/**
 * A failed load (offline, or a chunk removed by a redeploy) keeps showing the
 * placeholder instead of throwing. The cache entry is dropped, so the next
 * mount tries to load the illustration again.
 */
function getLazyIllustration(illustration: IllustrationKind) {
  let component = lazyIllustrations.get(illustration);
  if (!component) {
    component = lazy(() =>
      illustrationLoaders[illustration]().catch(() => {
        lazyIllustrations.delete(illustration);
        return { default: IllustrationPlaceholder };
      })
    );
    lazyIllustrations.set(illustration, component);
  }
  return component;
}

/**
 * Renders the illustration once its module has loaded. Until then the
 * placeholder keeps the illustration's fixed size so the layout doesn't shift.
 */
export function LazyIllustration({
  illustration,
  className,
}: {
  illustration: IllustrationKind;
  className: string;
}) {
  const IllustrationComponent = getLazyIllustration(illustration);
  return (
    <Suspense fallback={<IllustrationPlaceholder className={className} />}>
      <IllustrationComponent className={className} />
    </Suspense>
  );
}
