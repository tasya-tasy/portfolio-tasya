import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Normalizes an image path so Next.js Image component never crashes with "Invalid URL".
 * Handles:
 * - "public/image.png" -> "/image.png"
 * - "/public/image.png" -> "/image.png"
 * - "image.png" -> "/image.png"
 * - "https://..." -> "https://..."
 */
export function normalizeImagePath(src?: string): string {
  if (!src || typeof src !== "string") return "";
  const trimmed = src.trim();
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("data:")
  ) {
    return trimmed;
  }
  let clean = trimmed.replace(/^\/?public\//, "/");
  if (!clean.startsWith("/")) {
    clean = "/" + clean;
  }
  return clean;
}

/**
 * Formats a phone number or link to a valid WhatsApp wa.me URL
 */
export function formatWhatsAppUrl(phone?: string): string {
  if (!phone || typeof phone !== "string") return "#";
  const trimmed = phone.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  const digits = trimmed.replace(/\D/g, "");
  const formatted = digits.startsWith("0") ? "62" + digits.slice(1) : digits;
  return `https://wa.me/${formatted}`;
}
