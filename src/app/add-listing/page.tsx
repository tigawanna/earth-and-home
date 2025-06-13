import * as React from "react";
import { PropertyForm } from "@/components/forms/property-form";
import type { PropertyFormValues } from "@/lib/schemas";

export default function AddListingPage() {
  const handleSubmit = async (values: PropertyFormValues) => {
    // In a real application, you would send this data to your backend
    console.log("Form submitted with values:", values);
    
    // Example of how you might handle the submission
    // const response = await fetch('/api/listings', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // });
    // 
    // if (response.ok) {
    //   // Handle success - redirect or show success message
    // } else {
    //   // Handle error
    // }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Add New Property Listing
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Fill out the form below to add a new property to our marketplace.
          </p>
        </div>
        
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10">
          <PropertyForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}