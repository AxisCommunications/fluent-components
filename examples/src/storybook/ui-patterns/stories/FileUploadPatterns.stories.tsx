import type { Meta, StoryObj } from "@storybook/react";
import { FileUpload } from "../components/composites/FileUpload";

/**
 * File Upload pattern built with Fluent components and AXIS illustrations.
 */
const meta: Meta<typeof FileUpload> = {
  title: "UI patterns/File Upload",
  component: FileUpload,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Use this pattern when people need a clear entry point for uploading files inside a form, dialog, or setup flow. Prefer the multi-file version for attachments or supporting documents, and use the single-file version when the task expects exactly one required document such as an ID, contract, or profile asset.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "Upload area heading",
    },
    description: {
      control: "text",
      description: "Supporting text shown under the heading",
    },
    ctaLabel: {
      control: "text",
      description: "Label for browse button",
    },
    helperText: {
      control: "text",
      description: "Optional helper text shown under the upload area",
    },
    acceptedFileTypes: {
      control: "object",
      description: "Accepted MIME types or file extensions",
    },
    allowMultiple: {
      control: "boolean",
      description: "Allow selecting multiple files",
    },
    maxFiles: {
      control: "number",
      description: "Maximum number of files kept in the list",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Best for standard upload surfaces where users may add several related files at once. Suitable for document collection, onboarding steps, and content management flows where drag-and-drop and browse should feel equally prominent.",
      },
    },
  },
  args: {
    title: "Upload your documents",
    description: "Drag and drop files here or browse from your device.",
    ctaLabel: "Browse files",
    helperText: "PDF, DOCX and PNG up to 10 MB each.",
    acceptedFileTypes: [".pdf", ".doc", ".docx", ".png"],
    allowMultiple: true,
    maxFiles: 8,
  },
};

export const WithUploadToast: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use this version when upload progress is communicated outside the drop zone and you want lightweight feedback without rendering an attachment list below the component. Suitable for quick upload actions in compact forms, drawers, and task panels.",
      },
    },
  },
  args: {
    title: "Add files",
    description: "Drop files into this area to attach them.",
    ctaLabel: "Select files",
    helperText: "Maximum 3 attachments",
    acceptedFileTypes: [".pdf", ".png"],
    maxFiles: 3,
  },
};

export const SingleFile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use this version when the user must provide exactly one file and the task should feel constrained and explicit. Suitable for proof-of-identity uploads, avatar replacement, signed document collection, and any workflow where multiple attachments would create ambiguity.",
      },
    },
  },
  args: {
    title: "Upload profile document",
    description: "Select a single file to continue.",
    ctaLabel: "Choose file",
    helperText: "One PDF file only.",
    acceptedFileTypes: [".pdf"],
    allowMultiple: false,
    maxFiles: 1,
  },
};
