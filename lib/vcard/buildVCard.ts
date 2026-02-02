import type { CardFormData } from "@/types/card";
import { getPlatformName } from "@/lib/constants";

/**
 * Escapes vCard value special chars: \ , ; \n
 */
const escapeVCardValue = (value: string): string => {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
};

/**
 * Builds vCard 4.0 string from form data so contact apps show platform names
 * (e.g. "GitHub", "LinkedIn") instead of page titles. Uses itemN.URL + itemN.X-ABLabel
 * (Apple-style) for social links.
 */
export const buildVCard = (data: CardFormData): string => {
  const lines: string[] = ["BEGIN:VCARD", "VERSION:4.0"];

  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");
  if (fullName.trim()) {
    lines.push(`FN:${escapeVCardValue(fullName.trim())}`);
    lines.push(`N:${escapeVCardValue(data.lastName.trim())};${escapeVCardValue(data.firstName.trim())};;;`);
  }
  if (data.company.trim()) {
    lines.push(`ORG:${escapeVCardValue(data.company.trim())}`);
  }
  if (data.title.trim()) {
    lines.push(`TITLE:${escapeVCardValue(data.title.trim())}`);
  }
  const phoneNumber = data.phone.replace(/\s/g, "").trim();
  if (phoneNumber) {
    const fullPhone = data.phoneCountryCode.trim()
      ? `${data.phoneCountryCode.replace(/\s/g, "")}${phoneNumber}`
      : phoneNumber;
    lines.push(`TEL;TYPE=CELL:${escapeVCardValue(fullPhone)}`);
  }
  if (data.email.trim()) {
    lines.push(`EMAIL:${escapeVCardValue(data.email.trim())}`);
  }
  if (data.website.trim()) {
    lines.push(`URL:${escapeVCardValue(data.website.trim())}`);
  }

  const socialLinks = data.socialLinks.filter((link) => link.url.trim());
  socialLinks.forEach((link, index) => {
    const itemId = `item${index + 1}`;
    const label = getPlatformName(link.platformId);
    const url = escapeVCardValue(link.url.trim());
    lines.push(`${itemId}.URL:${url}`);
    lines.push(`${itemId}.X-ABLabel:${escapeVCardValue(label)}`);
  });

  lines.push("END:VCARD");
  return lines.join("\r\n");
};
