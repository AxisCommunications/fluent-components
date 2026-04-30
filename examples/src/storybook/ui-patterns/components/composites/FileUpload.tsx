import { DocumentsLight } from "@axiscommunications/fluent-illustrations";
import {
  Button,
  Spinner,
  Text,
  Toast,
  ToastTitle,
  Toaster,
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
  useId,
  useToastController,
} from "@fluentui/react-components";
import {
  ArrowUploadRegular,
  CheckmarkCircleRegular,
} from "@fluentui/react-icons";
import {
  type DragEvent,
  type ReactNode,
  forwardRef,
  useRef,
  useState,
} from "react";

export type FileUploadItemStatus = "uploading" | "complete" | "error";

export interface FileUploadItem {
  id: string;
  name: string;
  size: string;
  status?: FileUploadItemStatus;
}

export interface FileUploadProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  helperText?: string;
  acceptedFileTypes?: string[];
  allowMultiple?: boolean;
  maxFiles?: number;
  defaultFiles?: FileUploadItem[];
  onFilesChange?: (files: FileUploadItem[]) => void;
  className?: string;
  illustration?: ReactNode;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "640px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "grid",
    justifyItems: "center",
    gap: tokens.spacingVerticalM,
  },

  uploadSurface: {
    display: "grid",
    justifyItems: "center",
    gap: tokens.spacingVerticalL,
    textAlign: "center",
    padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXL}`,
    border: `${tokens.strokeWidthThin} dashed ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusLarge,
    backgroundColor: tokens.colorNeutralBackground1,
    transitionDuration: tokens.durationNormal,
    transitionProperty: "border-color, background-color",
    transitionTimingFunction: tokens.curveEasyEase,
  },

  uploadSurfaceDragging: {
    ...shorthands.borderColor(tokens.colorCompoundBrandStroke),
    backgroundColor: tokens.colorNeutralBackground1Hover,
  },

  illustration: {
    width: "200px",
    maxWidth: "100%",
  },

  content: {
    display: "grid",
    justifyItems: "center",
    textAlign: "center",
    gap: tokens.spacingVerticalS,
  },

  title: {
    color: tokens.colorNeutralForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },

  description: {
    color: tokens.colorNeutralForeground2,
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: tokens.spacingHorizontalM,
  },

  helper: {
    textAlign: "center",
    color: tokens.colorNeutralForeground3,
  },

  successIcon: {
    color: tokens.colorPaletteGreenForeground1,
  },

  input: {
    display: "none",
  },
});

function formatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) {
    return `${sizeInBytes} B`;
  }

  const sizeInKilobytes = sizeInBytes / 1024;

  if (sizeInKilobytes < 1024) {
    return `${sizeInKilobytes.toFixed(1)} KB`;
  }

  const sizeInMegabytes = sizeInKilobytes / 1024;
  return `${sizeInMegabytes.toFixed(1)} MB`;
}

function toFileItems(files: File[]): FileUploadItem[] {
  return files.map((file) => ({
    id: `${file.name}-${file.lastModified}-${file.size}`,
    name: file.name,
    size: formatFileSize(file.size),
    status: "complete",
  }));
}

/**
 * FileUpload provides a drag-and-drop style upload area using Fluent components
 * and AXIS illustrations.
 */
export const FileUpload = forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      title = "Upload files",
      description = "Drag and drop files here or browse from your device.",
      ctaLabel = "Browse files",
      helperText,
      acceptedFileTypes,
      allowMultiple = true,
      maxFiles,
      defaultFiles,
      onFilesChange,
      className,
      illustration,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles();
    const toasterId = useId("file-upload-toaster");
    const uploadToastId = useId("file-upload-toast");
    const { dispatchToast, updateToast } = useToastController(toasterId);
    const inputRef = useRef<HTMLInputElement>(null);
    const uploadCompleteTimeoutRef = useRef<number | undefined>(undefined);
    const [isDragging, setIsDragging] = useState(false);
    const [files, setFiles] = useState<FileUploadItem[]>(defaultFiles ?? []);

    const acceptedTypesLabel =
      acceptedFileTypes && acceptedFileTypes.length > 0
        ? acceptedFileTypes.join(", ")
        : undefined;

    const updateFiles = (nextFiles: FileUploadItem[]) => {
      setFiles(nextFiles);
      onFilesChange?.(nextFiles);
    };

    const addFiles = (incomingFiles: File[]) => {
      const nextFiles = [...files, ...toFileItems(incomingFiles)];
      const deduplicatedFiles = Array.from(
        new Map(nextFiles.map((file) => [file.id, file])).values()
      );
      const constrainedFiles =
        typeof maxFiles === "number"
          ? deduplicatedFiles.slice(0, Math.max(maxFiles, 0))
          : deduplicatedFiles;

      updateFiles(constrainedFiles);

      const filesCount = incomingFiles.length;
      if (uploadCompleteTimeoutRef.current !== undefined) {
        window.clearTimeout(uploadCompleteTimeoutRef.current);
      }

      dispatchToast(
        <Toast>
          <ToastTitle media={<Spinner size="tiny" />}>
            Uploading {filesCount} file{filesCount === 1 ? "" : "s"}
          </ToastTitle>
        </Toast>,
        { intent: "info", timeout: -1, toastId: uploadToastId }
      );

      uploadCompleteTimeoutRef.current = window.setTimeout(() => {
        updateToast({
          toastId: uploadToastId,
          content: (
            <Toast>
              <ToastTitle
                media={
                  <CheckmarkCircleRegular className={styles.successIcon} />
                }
              >
                Uploaded {filesCount} file{filesCount === 1 ? "" : "s"}
              </ToastTitle>
            </Toast>
          ),
          intent: "success",
          timeout: 2500,
        });
      }, 1200);
    };

    const onBrowseClick = () => {
      inputRef.current?.click();
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selected = event.target.files;
      if (selected && selected.length > 0) {
        addFiles(Array.from(selected));
      }

      event.target.value = "";
    };

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      setIsDragging(false);
      const droppedFiles = Array.from(event.dataTransfer.files);
      if (droppedFiles.length > 0) {
        addFiles(droppedFiles);
      }
    };

    return (
      <div ref={ref} className={mergeClasses(styles.root, className)} {...rest}>
        <div
          className={mergeClasses(
            styles.uploadSurface,
            isDragging && styles.uploadSurfaceDragging
          )}
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
        >
          <div className={styles.illustration}>
            {illustration ?? <DocumentsLight width={200} />}
          </div>

          <div className={styles.content}>
            <Text as="h3" size={500} className={styles.title}>
              {title}
            </Text>
            <Text className={styles.description}>{description}</Text>
          </div>

          <div className={styles.actions}>
            <Button
              appearance="primary"
              icon={<ArrowUploadRegular />}
              onClick={onBrowseClick}
            >
              {ctaLabel}
            </Button>
            {acceptedTypesLabel ? (
              <Text size={200} className={styles.helper}>
                Supported: {acceptedTypesLabel}
              </Text>
            ) : null}
          </div>

          <input
            ref={inputRef}
            className={styles.input}
            type="file"
            accept={acceptedFileTypes?.join(",")}
            multiple={allowMultiple}
            onChange={onInputChange}
          />
        </div>

        {helperText ? (
          <Text size={200} className={styles.helper}>
            {helperText}
          </Text>
        ) : null}
        <Toaster toasterId={toasterId} position="top-end" />
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";
