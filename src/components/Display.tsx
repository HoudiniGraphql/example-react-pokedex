import * as React from "react";

export function Display({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <div id={id} className={`displayContainer ${className}`}>
      {children}
    </div>
  );
}
