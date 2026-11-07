import { PROJECT_TYPES, type ProjectType } from "@/lib/content";

export type ContactField =
  | "name"
  | "email"
  | "phone"
  | "projectType"
  | "message";

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactData = {
  name: string;
  email: string;
  phone: string;
  projectType: ProjectType;
  message: string;
};

export type ContactResponse = {
  ok: boolean;
  error?: string;
  fields?: ContactFieldErrors;
};

export type ContactValidation =
  | { ok: true; data: ContactData }
  | { ok: false; error: string; fields: ContactFieldErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+().\-\s]+$/;

const LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  message: 5000,
} as const;

function readRecord(input: unknown): Record<string, unknown> {
  if (typeof input === "object" && input !== null && !Array.isArray(input)) {
    return input as Record<string, unknown>;
  }
  return {};
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function singleLine(value: string): string {
  return value.replace(/[\u0000-\u001F]+/g, " ").replace(/\s+/g, " ").trim();
}

function isProjectType(value: string): value is ProjectType {
  return (PROJECT_TYPES as readonly string[]).includes(value);
}

export function honeypotFilled(input: unknown): boolean {
  return asText(readRecord(input).website).trim().length > 0;
}

export function validateContact(input: unknown): ContactValidation {
  const record = readRecord(input);
  const name = singleLine(asText(record.name));
  const email = singleLine(asText(record.email));
  const phone = singleLine(asText(record.phone));
  const projectType = singleLine(asText(record.projectType));
  const message = asText(record.message).replace(/\u0000/g, "").trim();
  const fields: ContactFieldErrors = {};

  if (!name) {
    fields.name = "Please enter your name.";
  } else if (name.length > LIMITS.name) {
    fields.name = "That name is too long.";
  }

  if (!email || !EMAIL_PATTERN.test(email) || email.length > LIMITS.email) {
    fields.email = "Enter a valid email address.";
  }

  if (phone) {
    const digits = phone.replace(/\D/g, "");
    if (
      phone.length > LIMITS.phone ||
      !PHONE_PATTERN.test(phone) ||
      digits.length < 7 ||
      digits.length > 15
    ) {
      fields.phone = "Enter a phone number, or leave this blank.";
    }
  }

  if (!isProjectType(projectType)) {
    fields.projectType = "Choose a project type.";
  }

  if (!message) {
    fields.message = "Tell Nick a little about the project.";
  } else if (message.length > LIMITS.message) {
    fields.message = "That message is too long. Please shorten it.";
  }

  if (Object.keys(fields).length > 0 || !isProjectType(projectType)) {
    return {
      ok: false,
      error: "Please check the form and try again.",
      fields,
    };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      projectType,
      message,
    },
  };
}
