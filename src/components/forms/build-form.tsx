"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { submitBuildRequest } from "@/app/build/actions";
import { Button } from "@/components/ui/button";
import { Field, Input, Textarea } from "@/components/ui/field";
import { buildRequestSchema, type BuildRequest } from "@/lib/schemas";

type InputDefinition = {
  name: keyof BuildRequest;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "time";
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
};

const contactFields: InputDefinition[] = [
  {
    name: "firstName",
    label: "First name",
    autoComplete: "given-name",
    required: true,
  },
  {
    name: "lastName",
    label: "Last name",
    autoComplete: "family-name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    autoComplete: "tel",
    required: true,
  },
  { name: "company", label: "Business name", autoComplete: "organization" },
  {
    name: "industry",
    label: "Business or industry",
    placeholder: "e.g. Real estate, consulting",
    required: true,
  },
];

export function BuildForm() {
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BuildRequest>({
    resolver: zodResolver(buildRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      preferredDate: "",
      preferredTime: "",
      timeZone: "",
      otherAvailability: "",
      goals: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    startTransition(async () => {
      try {
        const result = await submitBuildRequest(values);
        if (result.ok) {
          setSubmitted(true);
        } else {
          setServerError(result.message);
        }
      } catch {
        setServerError("Your request could not be sent. Please try again.");
      }
    });
  });

  const renderInput = (field: InputDefinition) => (
    <Field
      key={field.name}
      label={field.label}
      htmlFor={field.name}
      required={field.required}
      error={errors[field.name]?.message}
      className="min-w-0"
    >
      <Input
        id={field.name}
        type={field.type ?? "text"}
        autoComplete={field.autoComplete}
        placeholder={field.placeholder}
        aria-required={field.required}
        aria-invalid={Boolean(errors[field.name])}
        aria-describedby={
          errors[field.name] ? `${field.name}-error` : undefined
        }
        className="min-w-0"
        {...register(field.name)}
      />
    </Field>
  );

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-lg border border-cobalt-500/40 bg-cobalt-glow p-6"
      >
        <span className="flex size-10 items-center justify-center rounded-full border border-cobalt-500/40 text-cobalt-400">
          <CheckIcon aria-hidden className="size-5" strokeWidth={1.5} />
        </span>
        <h2 className="font-display text-h3 text-paper">Request received</h2>
        <p className="text-sm leading-relaxed text-muted">
          Your preferred time has been sent to our team. Your call is not booked
          yet; we will contact you to confirm a time.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex min-w-0 flex-col gap-8"
    >
      <p className="rounded-sm border border-line bg-ink-950 p-3 text-sm leading-relaxed text-muted">
        This form is being set up. Requests cannot be sent yet.
      </p>

      <fieldset className="min-w-0">
        <legend className="mb-5 font-display text-h3 text-paper">
          Your details
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          {contactFields.map(renderInput)}
        </div>
      </fieldset>

      <fieldset className="min-w-0 border-t border-line pt-6">
        <legend className="pr-3 font-display text-h3 text-paper">
          Call availability
        </legend>
        <p
          id="availability-hint"
          className="mb-5 text-sm leading-relaxed text-muted"
        >
          Choose a time that works for you. We will confirm the call with you
          separately.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          {renderInput({
            name: "preferredDate",
            label: "Preferred date",
            type: "date",
            required: true,
          })}
          {renderInput({
            name: "preferredTime",
            label: "Preferred time",
            type: "time",
            required: true,
          })}
        </div>
        <div className="mt-5 flex flex-col gap-5">
          {renderInput({
            name: "timeZone",
            label: "City or time zone",
            placeholder: "e.g. Chicago, Central Time",
            required: true,
          })}
          <Field
            label="Other availability"
            htmlFor="otherAvailability"
            error={errors.otherAvailability?.message}
          >
            <Textarea
              id="otherAvailability"
              rows={3}
              placeholder="Other dates or times that work for you"
              maxLength={1000}
              aria-invalid={Boolean(errors.otherAvailability)}
              aria-describedby={
                errors.otherAvailability ? "otherAvailability-error" : undefined
              }
              {...register("otherAvailability")}
            />
          </Field>
        </div>
      </fieldset>

      <Field
        label="What would you like us to build?"
        htmlFor="goals"
        error={errors.goals?.message}
      >
        <Textarea
          id="goals"
          rows={4}
          maxLength={2000}
          placeholder="Tell us what you need and which tools you use today."
          aria-invalid={Boolean(errors.goals)}
          aria-describedby={errors.goals ? "goals-error" : undefined}
          {...register("goals")}
        />
      </Field>

      {serverError ? (
        <p role="alert" className="text-sm text-alert">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col items-start gap-3">
        <Button
          type="submit"
          size="lg"
          disabled={pending}
          className="h-auto min-h-12 w-full whitespace-normal py-3 sm:w-auto"
        >
          {pending ? "Sending..." : "Request a discovery call"}
        </Button>
        <p className="text-xs leading-relaxed text-faint">
          We use your details to discuss your project and arrange a call.
        </p>
      </div>
    </form>
  );
}
