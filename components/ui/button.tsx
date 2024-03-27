import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brandCol4 text-brandCol2 border border-brandCol2 hover:bg-brandCol5 hover:text-brandCol1 hover:border-brandCol6 dark:bg-brandCol6 dark:text-brandCol1 dark:border-brandCol1 dark:hover:bg-brandCol5 dark:hover:text-brandCol2 dark:hover:border-brandCol4",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive/80 dark:text-destructive-foreground dark:hover:bg-destructive",
        outline:
          "border-brandCol2 bg-transparent hover:bg-brandCol8 hover:border-brandCol6 hover:text-brandCol6 dark:border-brandCol1 dark:hover:bg-brandCol3 dark:hover:border-brandCol4 dark:hover:text-brandCol4",
        secondary:
          "bg-brandCol3 text-brandCol1 hover:bg-brandCol3/80 hover:text-brandCol4 dark:bg-brandCol2 dark:text-brandCol4 dark:hover:bg-brandCol3 dark:hover:text-brandCol8",
        ghost:
          "bg-transparent hover:bg-brandCol8 hover:text-brandCol6 dark:hover:bg-brandCol3 dark:hover:text-brandCol4",
        link: "text-brandCol6 underline-offset-4 hover:underline dark:text-brandCol4",
      },
      size: {
        default: "h-10 px-6 py-2 rounded",
        sm: "h-9 px-4 rounded",
        lg: "h-12 px-8 rounded text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
