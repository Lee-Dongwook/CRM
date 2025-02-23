"use client";

import React from "react";
import { toast } from "sonner";
import { Copy } from "lucide-react";

interface CopyKeyComponentProps {
  keyValue?: string;
  envValue?: string;
  message: string;
}

const CopyKeyComponent = ({
  keyValue,
  envValue,
  message,
}: CopyKeyComponentProps) => {
  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    toast.success(message + " - " + "copied to clipboard");
  };

  return (
    <p
      className="flex gap-2 items-center"
      onClick={() => onCopy(keyValue || "")}
    >
      {keyValue ? keyValue : envValue ? envValue : "Not set"}
      <Copy className="w-4 h-4" />
    </p>
  );
};

export default CopyKeyComponent;
