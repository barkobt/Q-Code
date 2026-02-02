/**
 * Q-Card form data. All fields optional (PRD: no required fields).
 */
export type SocialLink = {
  platformId: string;
  url: string;
};

export type CardFormData = {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  phoneCountryCode: string;
  phone: string;
  email: string;
  website: string;
  socialLinks: SocialLink[];
};

export const initialCardFormData: CardFormData = {
  firstName: "",
  lastName: "",
  title: "",
  company: "",
  phoneCountryCode: "+90",
  phone: "",
  email: "",
  website: "",
  socialLinks: [],
};
