import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  description?: string;
}

const FormCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, description, id, ...props }, ref) => {
    const checkboxId = id || React.useId();
    const descriptionId = description ? `${checkboxId}-description` : undefined;
    const errorId = error ? `${checkboxId}-error` : undefined;
    
    return (
      <div className="space-y-2">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              type="checkbox"
              id={checkboxId}
              className={cn(
                "h-4 w-4 rounded border-gray-300 text-earth-green-600 focus:ring-earth-green-500",
                error && "border-red-500 focus:ring-red-500",
                className
              )}
              ref={ref}
              aria-invalid={error ? "true" : undefined}
              aria-describedby={
                error
                  ? errorId
                  : description
                  ? descriptionId
                  : undefined
              }
              {...props}
            />
          </div>
          {label && (
            <div className="ml-3 text-sm">
              <label
                htmlFor={checkboxId}
                className="font-medium text-gray-700"
              >
                {label}
              </label>
            </div>
          )}
        </div>
        {description && !error && (
          <p
            id={descriptionId}
            className="text-sm text-gray-500 ml-7"
          >
            {description}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            className="text-sm text-red-500 ml-7"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormCheckbox.displayName = "FormCheckbox";

export { FormCheckbox };