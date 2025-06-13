import * as React from "react";
import { ContactForm } from "@/components/forms/contact-form";
import type { ContactFormValues } from "@/lib/schemas";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = async (values: ContactFormValues) => {
    // In a real application, you would send this data to your backend
    console.log("Contact form submitted with values:", values);
    
    // Example of how you might handle the submission
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // });
    // 
    // if (response.ok) {
    //   // Handle success - show success message
    // } else {
    //   // Handle error
    // }
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Have questions about a property or need assistance? We're here to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-earth-green-600" />
                  </div>
                  <div className="ml-3 text-base">
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-500">info@earthandhome.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-earth-green-600" />
                  </div>
                  <div className="ml-3 text-base">
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-earth-green-600" />
                  </div>
                  <div className="ml-3 text-base">
                    <p className="font-medium text-gray-900">Office</p>
                    <p className="text-gray-500">
                      123 Green Street<br />
                      Eco City, EC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-500">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}