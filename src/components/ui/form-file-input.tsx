import * as React from "react";
import { cn } from "@/lib/utils";
import { Upload, X } from "lucide-react";
import Image from "next/image";

export interface FileInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> {
  label?: string;
  error?: string;
  description?: string;
  value?: File[];
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  preview?: boolean;
  maxFiles?: number;
}

const FormFileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({
    className,
    label,
    error,
    description,
    value = [],
    onChange,
    accept = "image/*",
    multiple = true,
    preview = true,
    maxFiles = 5,
    id,
    ...props
  }, ref) => {
    const inputId = id || React.useId();
    const descriptionId = description ? `${inputId}-description` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [previewUrls, setPreviewUrls] = React.useState<string[]>([]);
    
    // Merge refs
    React.useImperativeHandle(ref, () => inputRef.current!);
    
    // Generate preview URLs for files
    React.useEffect(() => {
      if (!preview || !value.length) {
        setPreviewUrls([]);
        return;
      }
      
      const urls = value.map(file => URL.createObjectURL(file));
      setPreviewUrls(urls);
      
      // Cleanup URLs on unmount
      return () => {
        urls.forEach(url => URL.revokeObjectURL(url));
      };
    }, [value, preview]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.length) return;
      
      const fileList = Array.from(e.target.files);
      const newFiles = [...value];
      
      fileList.forEach(file => {
        if (newFiles.length < maxFiles) {
          newFiles.push(file);
        }
      });
      
      onChange?.(newFiles);
      
      // Reset the input value so the same file can be selected again
      e.target.value = "";
    };
    
    const removeFile = (index: number) => {
      const newFiles = [...value];
      newFiles.splice(index, 1);
      onChange?.(newFiles);
    };
    
    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (!e.dataTransfer.files?.length) return;
      
      const fileList = Array.from(e.dataTransfer.files);
      const acceptedFiles = fileList.filter(file => {
        if (!accept) return true;
        const fileType = file.type;
        const acceptTypes = accept.split(",").map(type => type.trim());
        return acceptTypes.some(type => {
          if (type === "*" || type === "*/*") return true;
          if (type.endsWith("/*")) {
            const mainType = type.split("/")[0];
            return fileType.startsWith(`${mainType}/`);
          }
          return fileType === type;
        });
      });
      
      const newFiles = [...value];
      acceptedFiles.forEach(file => {
        if (newFiles.length < maxFiles) {
          newFiles.push(file);
        }
      });
      
      onChange?.(newFiles);
    };
    
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-4 transition-colors",
            error
              ? "border-red-500"
              : "border-gray-300 hover:border-earth-green-500",
            className
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="flex flex-col items-center justify-center py-4">
            <Upload className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-1">
              Drag and drop files here, or
            </p>
            <button
              type="button"
              className="text-earth-green-600 hover:text-earth-green-700 text-sm font-medium"
              onClick={() => inputRef.current?.click()}
            >
              Browse files
            </button>
            <p className="text-xs text-gray-500 mt-1">
              {multiple
                ? `You can upload up to ${maxFiles} files`
                : "Only one file can be uploaded"}
            </p>
            {accept && (
              <p className="text-xs text-gray-500">
                Accepted formats: {accept.replace(/\*/g, "all").replace(/,/g, ", ")}
              </p>
            )}
          </div>
          
          <input
            ref={inputRef}
            id={inputId}
            type="file"
            className="sr-only"
            accept={accept}
            multiple={multiple}
            onChange={handleChange}
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
        
        {/* File previews */}
        {preview && previewUrls.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden border border-gray-200">
                <div className="relative aspect-square">
                  <Image
                    src={url}
                    alt={`Preview ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  type="button"
                  className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFile(index)}
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4 text-red-500" />
                </button>
              </div>
            ))}
          </div>
        )}
        
        {/* File list (no preview) */}
        {!preview && value.length > 0 && (
          <ul className="mt-2 space-y-1">
            {value.map((file, index) => (
              <li key={index} className="flex items-center justify-between text-sm py-1 px-2 bg-gray-50 rounded">
                <span className="truncate max-w-[80%]">{file.name}</span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFile(index)}
                  aria-label="Remove file"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
        
        {description && !error && (
          <p
            id={descriptionId}
            className="text-sm text-gray-500"
          >
            {description}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            className="text-sm text-red-500"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormFileInput.displayName = "FormFileInput";

export { FormFileInput };