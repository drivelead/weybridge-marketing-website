import React from "react";
import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
};

export default function Prose({ children, className }: Props) {
  return (
    <div
      className={cn(
        "prose:zinc prose max-w-none dark:prose-invert prose-li:list-disc",
        className
      )}
    >
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
