import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";
interface IconButtonProps {
  onclick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}
const IconButton: React.FC<IconButtonProps> = ({
  onclick,
  className,
  icon,
}) => {
  return (
    <button
      onClick={onclick}
      className={cn(
        "rounded-xl flex items-center justify-center  border shadow-md p-2 hover:scale-105 transition-transform",
        className
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
