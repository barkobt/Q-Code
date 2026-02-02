/**
 * Country calling codes for phone input.
 * Format: { code: ISO 3166-1 alpha-2, dialCode: with +, name: display }
 */
export type CountryCode = {
  code: string;
  dialCode: string;
  name: string;
};

/** ISO 3166-1 alpha-2 (e.g. TR, US) → flag emoji */
export const getCountryFlagEmoji = (code: string): string => {
  if (!code || code.length !== 2 || code === "OTHER") return "🌐";
  return code
    .split("")
    .map((c) => String.fromCodePoint(0x1f1e6 - 65 + c.toUpperCase().charCodeAt(0)))
    .join("");
};

export const COUNTRY_CODES: CountryCode[] = [
  { code: "TR", dialCode: "+90", name: "Türkiye" },
  { code: "US", dialCode: "+1", name: "ABD" },
  { code: "GB", dialCode: "+44", name: "Birleşik Krallık" },
  { code: "DE", dialCode: "+49", name: "Almanya" },
  { code: "FR", dialCode: "+33", name: "Fransa" },
  { code: "NL", dialCode: "+31", name: "Hollanda" },
  { code: "BE", dialCode: "+32", name: "Belçika" },
  { code: "AZ", dialCode: "+994", name: "Azerbaycan" },
  { code: "RU", dialCode: "+7", name: "Rusya" },
  { code: "UA", dialCode: "+380", name: "Ukrayna" },
  { code: "PL", dialCode: "+48", name: "Polonya" },
  { code: "IT", dialCode: "+39", name: "İtalya" },
  { code: "ES", dialCode: "+34", name: "İspanya" },
  { code: "SA", dialCode: "+966", name: "Suudi Arabistan" },
  { code: "AE", dialCode: "+971", name: "BAE" },
  { code: "EG", dialCode: "+20", name: "Mısır" },
  { code: "IN", dialCode: "+91", name: "Hindistan" },
  { code: "CN", dialCode: "+86", name: "Çin" },
  { code: "JP", dialCode: "+81", name: "Japonya" },
  { code: "KR", dialCode: "+82", name: "Güney Kore" },
  { code: "BR", dialCode: "+55", name: "Brezilya" },
  { code: "CA", dialCode: "+1", name: "Kanada" },
  { code: "AU", dialCode: "+61", name: "Avustralya" },
  { code: "CH", dialCode: "+41", name: "İsviçre" },
  { code: "AT", dialCode: "+43", name: "Avusturya" },
  { code: "SE", dialCode: "+46", name: "İsveç" },
  { code: "NO", dialCode: "+47", name: "Norveç" },
  { code: "DK", dialCode: "+45", name: "Danimarka" },
  { code: "FI", dialCode: "+358", name: "Finlandiya" },
  { code: "GR", dialCode: "+30", name: "Yunanistan" },
  { code: "PT", dialCode: "+351", name: "Portekiz" },
  { code: "RO", dialCode: "+40", name: "Romanya" },
  { code: "HU", dialCode: "+36", name: "Macaristan" },
  { code: "CZ", dialCode: "+420", name: "Çekya" },
  { code: "IL", dialCode: "+972", name: "İsrail" },
  { code: "IR", dialCode: "+98", name: "İran" },
  { code: "PK", dialCode: "+92", name: "Pakistan" },
  { code: "BD", dialCode: "+880", name: "Bangladeş" },
  { code: "ID", dialCode: "+62", name: "Endonezya" },
  { code: "MY", dialCode: "+60", name: "Malezya" },
  { code: "SG", dialCode: "+65", name: "Singapur" },
  { code: "TH", dialCode: "+66", name: "Tayland" },
  { code: "VN", dialCode: "+84", name: "Vietnam" },
  { code: "PH", dialCode: "+63", name: "Filipinler" },
  { code: "ZA", dialCode: "+27", name: "Güney Afrika" },
  { code: "NG", dialCode: "+234", name: "Nijerya" },
  { code: "KE", dialCode: "+254", name: "Kenya" },
  { code: "AR", dialCode: "+54", name: "Arjantin" },
  { code: "MX", dialCode: "+52", name: "Meksika" },
  { code: "CL", dialCode: "+56", name: "Şili" },
  { code: "CO", dialCode: "+57", name: "Kolombiya" },
  { code: "IE", dialCode: "+353", name: "İrlanda" },
  { code: "NZ", dialCode: "+64", name: "Yeni Zelanda" },
  { code: "CY", dialCode: "+357", name: "Kıbrıs" },
  { code: "LU", dialCode: "+352", name: "Lüksemburg" },
  { code: "BG", dialCode: "+359", name: "Bulgaristan" },
  { code: "HR", dialCode: "+385", name: "Hırvatistan" },
  { code: "SK", dialCode: "+421", name: "Slovakya" },
  { code: "SI", dialCode: "+386", name: "Slovenya" },
  { code: "RS", dialCode: "+381", name: "Sırbistan" },
  { code: "KZ", dialCode: "+7", name: "Kazakistan" },
  { code: "UZ", dialCode: "+998", name: "Özbekistan" },
  { code: "GE", dialCode: "+995", name: "Gürcistan" },
  { code: "IQ", dialCode: "+964", name: "Irak" },
  { code: "JO", dialCode: "+962", name: "Ürdün" },
  { code: "LB", dialCode: "+961", name: "Lübnan" },
  { code: "QA", dialCode: "+974", name: "Katar" },
  { code: "KW", dialCode: "+965", name: "Kuveyt" },
  { code: "BH", dialCode: "+973", name: "Bahreyn" },
  { code: "OM", dialCode: "+968", name: "Umman" },
  { code: "YE", dialCode: "+967", name: "Yemen" },
  { code: "AF", dialCode: "+93", name: "Afganistan" },
  { code: "BY", dialCode: "+375", name: "Belarus" },
  { code: "MD", dialCode: "+373", name: "Moldova" },
  { code: "LT", dialCode: "+370", name: "Litvanya" },
  { code: "LV", dialCode: "+371", name: "Letonya" },
  { code: "EE", dialCode: "+372", name: "Estonya" },
  { code: "IS", dialCode: "+354", name: "İzlanda" },
  { code: "MT", dialCode: "+356", name: "Malta" },
  { code: "AL", dialCode: "+355", name: "Arnavutluk" },
  { code: "MK", dialCode: "+389", name: "Kuzey Makedonya" },
  { code: "BA", dialCode: "+387", name: "Bosna-Hersek" },
  { code: "ME", dialCode: "+382", name: "Karadağ" },
  { code: "XK", dialCode: "+383", name: "Kosova" },
  { code: "TN", dialCode: "+216", name: "Tunus" },
  { code: "MA", dialCode: "+212", name: "Fas" },
  { code: "DZ", dialCode: "+213", name: "Cezayir" },
  { code: "LY", dialCode: "+218", name: "Libya" },
  { code: "GH", dialCode: "+233", name: "Gana" },
  { code: "ET", dialCode: "+251", name: "Etiyopya" },
  { code: "TZ", dialCode: "+255", name: "Tanzanya" },
  { code: "UG", dialCode: "+256", name: "Uganda" },
  { code: "OTHER", dialCode: "", name: "Diğer" },
];

export const DEFAULT_COUNTRY_CODE = "+90";
