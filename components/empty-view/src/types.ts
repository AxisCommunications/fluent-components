import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

import { Illustration } from "./constants";

export type IllustrationKind = keyof typeof Illustration;

export interface ContentProps {
  readonly body: ReactNode;
  readonly illustration: IllustrationKind;
  readonly title: string;
}

export type EmptyViewProps = PropsWithChildren<
  {
    readonly after?: ReactNode;
    readonly illustration: IllustrationKind;
    readonly title: string;
  } & HtmlDivAttributesRestProps
>;

export type HtmlDivAttributesRestProps = Pick<
  HTMLAttributes<HTMLDivElement>,
  "className" | "style"
>;
