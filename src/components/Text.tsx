import { PropsWithChildren } from "react";

type TextProps = PropsWithChildren & {
  size?: "small" | "medium" | "large"
}

export function Text({ children, size }: TextProps) {
  return <p>{children}</p>
}