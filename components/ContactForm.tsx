"use client";

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import {
  contactSendFailedMessage,
  PROJECT_TYPES,
  studio,
} from "@/lib/content";
import {
  validateContact,
  type ContactField,
  type ContactFieldErrors,
  type ContactResponse,
} from "@/lib/contact";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  website: string;
};

const EMPTY: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
  website: "",
};

const FIELD_ORDER: ContactField[] = [
  "name",
  "email",
  "phone",
  "projectType",
  "message",
];

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [formError, setFormError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const successRef = useRef<HTMLHeadingElement>(null);
  const honeypotId = useId();

  useEffect(() => {
    if (status === "success") {
      successRef.current?.focus();
    }
  }, [status]);

  function update(field: keyof FormValues) {
    return (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      const next = event.target.value;
      setValues((current) => ({ ...current, [field]: next }));
      if (field !== "website" && errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }));
      }
    };
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateContact(values);
    if (!validation.ok) {
      setErrors(validation.fields);
      setFormError(validation.error);
      setStatus("error");
      const firstInvalid = FIELD_ORDER.find((field) => validation.fields[field]);
      if (firstInvalid) {
        document.getElementById(firstInvalid)?.focus();
      }
      return;
    }

    setErrors({});
    setFormError("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...validation.data,
          website: values.website,
        }),
      });

      let data: ContactResponse | null = null;
      try {
        data = (await response.json()) as ContactResponse;
      } catch {
        data = null;
      }

      if (!response.ok || !data?.ok) {
        setErrors(data?.fields ?? {});
        setFormError(data?.error || contactSendFailedMessage);
        setStatus("error");
        return;
      }

      setValues(EMPTY);
      setStatus("success");
    } catch {
      setFormError(contactSendFailedMessage);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3 ref={successRef} tabIndex={-1}>
          Message sent.
        </h3>
        <p>
          Thanks. Your note is on its way to Nick, and he&apos;ll reply to the
          email you entered.
        </p>
        <button
          type="button"
          className="text-button"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      aria-labelledby="contact-heading"
      noValidate
      onSubmit={onSubmit}
      aria-busy={status === "submitting"}
    >
      <div className="honeypot" aria-hidden="true">
        <label htmlFor={honeypotId}>Company website</label>
        <input
          id={honeypotId}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={update("website")}
        />
      </div>

      {formError ? (
        <p className="form-banner full" role="alert">
          {formError}
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="First and last name"
          maxLength={100}
          required
          value={values.name}
          onChange={update("name")}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <span className="field-error" id="name-error">
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="email">Email address</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          maxLength={254}
          required
          value={values.email}
          onChange={update("email")}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <span className="field-error" id="email-error">
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className="field full">
        <label htmlFor="phone">
          Phone <span className="optional">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="Only if you’d like a call back"
          maxLength={40}
          value={values.phone}
          onChange={update("phone")}
          aria-invalid={errors.phone ? true : undefined}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone ? (
          <span className="field-error" id="phone-error">
            {errors.phone}
          </span>
        ) : null}
      </div>

      <div className="field full">
        <label htmlFor="projectType">What can I help with?</label>
        <select
          id="projectType"
          name="projectType"
          required
          value={values.projectType}
          onChange={update("projectType")}
          aria-invalid={errors.projectType ? true : undefined}
          aria-describedby={errors.projectType ? "projectType-error" : undefined}
        >
          <option value="">Choose a project type</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <span className="field-error" id="projectType-error">
            {errors.projectType}
          </span>
        ) : null}
      </div>

      <div className="field full">
        <label htmlFor="message">Project details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your business, project and preferred timing…"
          maxLength={5000}
          required
          value={values.message}
          onChange={update("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span className="field-error" id="message-error">
            {errors.message}
          </span>
        ) : null}
      </div>

      <button
        className="button full"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
      <p className="form-note full">
        Your message is emailed to Nick. You can also reach him at{" "}
        <a href={studio.emailHref}>{studio.email}</a> or{" "}
        <a href={studio.phoneHref}>{studio.phoneDisplay}</a>.
      </p>
    </form>
  );
}
