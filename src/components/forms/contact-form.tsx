import * as React from "react";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/form-zod-validator";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
  initialValues?: Partial<ContactFormValues>;
  isSubmitting?: boolean;
}

export function ContactForm({ onSubmit, initialValues = {}, isSubmitting = false }: ContactFormProps) {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      ...initialValues,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
    validatorAdapter: zodValidator,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <form.Field
          name="name"
          validators={{
            onChange: contactSchema.shape.name,
          }}
        >
          {(field) => (
            <FormInput
              label="Your Name"
              placeholder="John Doe"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              icon={<User className="h-5 w-5" />}
            />
          )}
        </form.Field>

        {/* Email */}
        <form.Field
          name="email"
          validators={{
            onChange: contactSchema.shape.email,
          }}
        >
          {(field) => (
            <FormInput
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              onBlur={field.handleBlur}
              error={field.state.meta.errors?.[0]}
              icon={<Mail className="h-5 w-5" />}
            />
          )}
        </form.Field>
      </div>

      {/* Phone */}
      <form.Field
        name="phone"
        validators={{
          onChange: contactSchema.shape.phone,
        }}
      >
        {(field) => (
          <FormInput
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            error={field.state.meta.errors?.[0]}
            icon={<Phone className="h-5 w-5" />}
          />
        )}
      </form.Field>

      {/* Message */}
      <form.Field
        name="message"
        validators={{
          onChange: contactSchema.shape.message,
        }}
      >
        {(field) => (
          <FormTextarea
            label="Message"
            placeholder="How can we help you?"
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            error={field.state.meta.errors?.[0]}
            rows={5}
            icon={<MessageSquare className="h-5 w-5" />}
          />
        )}
      </form.Field>

      <div className="flex justify-end">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isFormSubmitting]) => (
            <Button
              type="submit"
              className="bg-earth-green-600 hover:bg-earth-green-700"
              disabled={!canSubmit || isFormSubmitting || isSubmitting}
            >
              {isFormSubmitting || isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
}