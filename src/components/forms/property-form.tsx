import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/form-zod-validator";
import { propertySchema, type PropertyFormValues } from "@/lib/schemas";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { FormSelect } from "@/components/ui/form-select";
import { FormCheckbox } from "@/components/ui/form-checkbox";
import { FormFileInput } from "@/components/ui/form-file-input";
import { Button } from "@/components/ui/button";
import { MapPin, Building, DollarSign, Calendar, Home } from "lucide-react";

interface PropertyFormProps {
  onSubmit: (values: PropertyFormValues) => void;
  initialValues?: Partial<PropertyFormValues>;
  isSubmitting?: boolean;
}

const propertyTypeOptions = [
  { value: "", label: "Select Property Type" },
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
];

const statusOptions = [
  { value: "", label: "Select Status" },
  { value: "for-sale", label: "For Sale" },
  { value: "for-rent", label: "For Rent" },
  { value: "sold", label: "Sold" },
  { value: "pending", label: "Pending" },
];

export function PropertyForm({ onSubmit, initialValues = {}, isSubmitting = false }: PropertyFormProps) {
  // State for file uploads
  const [imageFiles, setImageFiles] = React.useState<File[]>([]);
  
  // Convert image files to the format expected by the schema
  const prepareImagesForSubmission = () => {
    return imageFiles.map(file => ({
      url: URL.createObjectURL(file),
      alt: file.name,
    }));
  };
  
  const form = useForm<PropertyFormValues>({
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      location: "",
      propertyType: "house",
      bedrooms: 0,
      bathrooms: 0,
      squareFeet: 0,
      yearBuilt: new Date().getFullYear(),
      features: [],
      images: [],
      status: "for-sale",
      contactEmail: "",
      contactPhone: "",
      ...initialValues,
    },
    onSubmit: async ({ value }) => {
      // Add the prepared images to the form values
      const formValues = {
        ...value,
        images: prepareImagesForSubmission(),
      };
      onSubmit(formValues);
    },
    validatorAdapter: zodValidator,
  });
  
  // State for features input
  const [featureInput, setFeatureInput] = React.useState("");
  const [features, setFeatures] = React.useState<string[]>(initialValues.features || []);
  
  const addFeature = () => {
    if (featureInput.trim() && !features.includes(featureInput.trim())) {
      const newFeatures = [...features, featureInput.trim()];
      setFeatures(newFeatures);
      form.setFieldValue("features", newFeatures);
      setFeatureInput("");
    }
  };
  
  const removeFeature = (index: number) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setFeatures(newFeatures);
    form.setFieldValue("features", newFeatures);
  };
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <form.Field
          name="title"
          validators={{
            onChange: propertySchema.shape.title,
          }}
        >
          {(field) => (
            <FormInput
              label="Property Title"
              placeholder="e.g. Modern Luxury Villa"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        </form.Field>
        
        {/* Price */}
        <form.Field
          name="price"
          validators={{
            onChange: propertySchema.shape.price,
          }}
        >
          {(field) => (
            <FormInput
              label="Price"
              type="number"
              placeholder="e.g. 500000"
              value={field.state.value.toString()}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              icon={<DollarSign className="h-5 w-5" />}
            />
          )}
        </form.Field>
      </div>
      
      {/* Description */}
      <form.Field
        name="description"
        validators={{
          onChange: propertySchema.shape.description,
        }}
      >
        {(field) => (
          <FormTextarea
            label="Description"
            placeholder="Describe the property in detail..."
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            error={field.state.meta.errors?.[0]}
            rows={5}
          />
        )}
      </form.Field>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Location */}
        <form.Field
          name="location"
          validators={{
            onChange: propertySchema.shape.location,
          }}
        >
          {(field) => (
            <FormInput
              label="Location"
              placeholder="e.g. Beverly Hills, CA"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              icon={<MapPin className="h-5 w-5" />}
            />
          )}
        </form.Field>
        
        {/* Property Type */}
        <form.Field
          name="propertyType"
          validators={{
            onChange: propertySchema.shape.propertyType,
          }}
        >
          {(field) => (
            <FormSelect
              label="Property Type"
              options={propertyTypeOptions}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as any)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              icon={<Building className="h-5 w-5" />}
            />
          )}
        </form.Field>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Bedrooms */}
        <form.Field
          name="bedrooms"
          validators={{
            onChange: propertySchema.shape.bedrooms,
          }}
        >
          {(field) => (
            <FormInput
              label="Bedrooms"
              type="number"
              placeholder="e.g. 3"
              value={field.state.value?.toString() || ""}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        </form.Field>
        
        {/* Bathrooms */}
        <form.Field
          name="bathrooms"
          validators={{
            onChange: propertySchema.shape.bathrooms,
          }}
        >
          {(field) => (
            <FormInput
              label="Bathrooms"
              type="number"
              placeholder="e.g. 2"
              value={field.state.value?.toString() || ""}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        </form.Field>
        
        {/* Square Feet */}
        <form.Field
          name="squareFeet"
          validators={{
            onChange: propertySchema.shape.squareFeet,
          }}
        >
          {(field) => (
            <FormInput
              label="Square Feet"
              type="number"
              placeholder="e.g. 2000"
              value={field.state.value?.toString() || ""}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        </form.Field>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Year Built */}
        <form.Field
          name="yearBuilt"
          validators={{
            onChange: propertySchema.shape.yearBuilt,
          }}
        >
          {(field) => (
            <FormInput
              label="Year Built"
              type="number"
              placeholder="e.g. 2010"
              value={field.state.value?.toString() || ""}
              onChange={(e) => field.handleChange(Number(e.target.value))}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              icon={<Calendar className="h-5 w-5" />}
            />
          )}
        </form.Field>
        
        {/* Status */}
        <form.Field
          name="status"
          validators={{
            onChange: propertySchema.shape.status,
          }}
        >
          {(field) => (
            <FormSelect
              label="Status"
              options={statusOptions}
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value as any)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              icon={<Home className="h-5 w-5" />}
            />
          )}
        </form.Field>
      </div>
      
      {/* Features */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Features
        </label>
        <div className="flex">
          <FormInput
            placeholder="e.g. Swimming Pool"
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
            className="flex-grow"
          />
          <Button
            type="button"
            onClick={addFeature}
            className="ml-2 bg-earth-green-600 hover:bg-earth-green-700"
          >
            Add
          </Button>
        </div>
        {features.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-earth-green-100 text-earth-green-800 px-3 py-1 rounded-full text-sm flex items-center"
              >
                <span>{feature}</span>
                <button
                  type="button"
                  className="ml-2 text-earth-green-600 hover:text-earth-green-800"
                  onClick={() => removeFeature(index)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Images */}
      <div>
        <FormFileInput
          label="Property Images"
          description="Upload high-quality images of the property. You can upload up to 5 images."
          value={imageFiles}
          onChange={setImageFiles}
          multiple
          accept="image/*"
          maxFiles={5}
          preview
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Email */}
        <form.Field
          name="contactEmail"
          validators={{
            onChange: propertySchema.shape.contactEmail,
          }}
        >
          {(field) => (
            <FormInput
              label="Contact Email"
              type="email"
              placeholder="e.g. contact@example.com"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        </form.Field>
        
        {/* Contact Phone */}
        <form.Field
          name="contactPhone"
          validators={{
            onChange: propertySchema.shape.contactPhone,
          }}
        >
          {(field) => (
            <FormInput
              label="Contact Phone"
              placeholder="e.g. +1 (555) 123-4567"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
            />
          )}
        </form.Field>
      </div>
      
      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          className="border-gray-300"
          onClick={() => form.reset()}
        >
          Reset
        </Button>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isFormSubmitting]) => (
            <Button
              type="submit"
              className="bg-earth-green-600 hover:bg-earth-green-700"
              disabled={!canSubmit || isFormSubmitting || isSubmitting}
            >
              {isFormSubmitting || isSubmitting ? "Submitting..." : "Submit Listing"}
            </Button>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}