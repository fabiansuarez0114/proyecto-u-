import * as React from "react"
import { cn } from "../lib/utils.ts"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition",
        className
      )}
      {...props}
    />
  )
}