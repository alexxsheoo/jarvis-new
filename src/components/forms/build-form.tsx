"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm, useWatch } from "react-hook-form";

import { submitBuildRequest } from "@/app/build/actions";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import {
  buildRequestSchema,
  pillarOptions,
  teamSizes,
  type BuildRequest,
} from "@/lib/schemas";
import { cn } from "@/lib/cn";

export function BuildForm() {
  const [pending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<BuildRequest>({
    resolver: zodResolver(buildRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      pillars: [],
      currentTools: "",
      goals: "",
    },
  });

  // `useWatch` rather than `watch()` — the latter returns a function the React
  // Compiler cannot memoize, which opts the whole component out of compilation.
  const selectedPillars = useWatch({ control, name: "pillars" }) ?? [];

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    startTransition(async () => {
      const result = await submitBuildRequest(values);
      if (result.ok) {
        setSubmitted(true);
      } else {
        setServerError(result.message);
      }
    });
  });

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-cobalt-500/40 bg-cobalt-glow p-8">
        <span className="flex size-10 items-center justify-center rounded-full border border-cobalt-500/40 text-cobalt-400">
          <CheckIcon aria-hidden className="size-5" strokeWidth={1.5} />
        </span>
        <h2 className="font-display text-h3 text-paper">Request received</h2>
        <p className="max-w-[52ch] text-sm leading-relaxed text-muted">
          We&rsquo;ll read what you sent and come back within one business day
          with a scoped plan — not a generic demo booking.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required error={errors.name?.message}>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </Field>

        <Field
          label="Work email"
          htmlFor="email"
          required
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Field>

        <Field
          label="Company"
          htmlFor="company"
          required
          error={errors.company?.message}
        >
          <Input
            id="company"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            {...register("company")}
          />
        </Field>

        <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
      </div>

      <Field
        label="Team size"
        htmlFor="teamSize"
        required
        error={errors.teamSize?.message}
        className="sm:max-w-xs"
      >
        <Select
          id="teamSize"
          defaultValue=""
          aria-invalid={Boolean(errors.teamSize)}
          {...register("teamSize")}
        >
          <option value="" disabled>
            Select…
          </option>
          {teamSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Select>
      </Field>

      <fieldset className="flex flex-col gap-3">
        <legend className="flex items-center gap-1.5 text-sm font-medium text-paper">
          What do you need?
          <span aria-hidden className="text-cobalt-400">
            *
          </span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {pillarOptions.map((pillar) => {
            const checked = selectedPillars.includes(pillar);
            return (
              <label
                key={pillar}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-sm border p-3 text-sm transition-colors",
                  checked
                    ? "border-cobalt-500/50 bg-cobalt-glow text-paper"
                    : "border-line bg-ink-900 text-muted hover:border-line-strong",
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={(event) => {
                    setValue(
                      "pillars",
                      event.target.checked
                        ? [...selectedPillars, pillar]
                        : selectedPillars.filter((p) => p !== pillar),
                      { shouldValidate: true },
                    );
                  }}
                />
                <span
                  aria-hidden
                  className={cn(
                    "flex size-4 shrink-0 items-center justify-center rounded-xs border",
                    checked
                      ? "border-cobalt-500 bg-cobalt-500 text-paper"
                      : "border-line-strong",
                  )}
                >
                  {checked ? <CheckIcon className="size-3" strokeWidth={3} /> : null}
                </span>
                {pillar}
              </label>
            );
          })}
        </div>
        {errors.pillars ? (
          <p role="alert" className="text-xs text-alert">
            {errors.pillars.message}
          </p>
        ) : null}
      </fieldset>

      <Field
        label="What are you running today?"
        htmlFor="currentTools"
        hint="CRM, dialer, spreadsheets — whatever the stack currently is."
        error={errors.currentTools?.message}
      >
        <Textarea id="currentTools" rows={3} {...register("currentTools")} />
      </Field>

      <Field
        label="What should Jarvis do first?"
        htmlFor="goals"
        required
        hint="The one thing that would matter most in the first 30 days."
        error={errors.goals?.message}
      >
        <Textarea
          id="goals"
          rows={5}
          aria-invalid={Boolean(errors.goals)}
          {...register("goals")}
        />
      </Field>

      {serverError ? (
        <p role="alert" className="text-sm text-alert">
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col items-start gap-3">
        <Button type="submit" size="lg" disabled={pending}>
          {pending ? "Sending…" : "Build My Jarvis"}
        </Button>
        <p className="text-xs text-faint">
          We use this to scope your build. No newsletter, no reselling.
        </p>
      </div>
    </form>
  );
}
