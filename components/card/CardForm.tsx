"use client";

import type { CardFormData, SocialLink } from "@/types/card";
import {
  HiUser,
  HiEnvelope,
  HiGlobeAlt,
  HiBuildingOffice2,
  HiBriefcase,
  HiPhone,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE, getCountryFlagEmoji } from "@/lib/constants";
import { SOCIAL_PLATFORMS, getPlatformName } from "@/lib/constants";
import { SocialPlatformIcon } from "@/components/icons";

type CardFormProps = {
  data: CardFormData;
  onUpdate: (data: CardFormData) => void;
};

const INPUT_CLASS =
  "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500";

const SECTION_TITLE_CLASS = "text-sm font-semibold text-zinc-600 dark:text-zinc-400";

export const CardForm = ({ data, onUpdate }: CardFormProps) => {
  const handleChange = (key: keyof CardFormData, value: string) => {
    onUpdate({ ...data, [key]: value });
  };

  const handleSocialAdd = () => {
    const firstId = SOCIAL_PLATFORMS[0]?.id ?? "facebook";
    onUpdate({
      ...data,
      socialLinks: [...data.socialLinks, { platformId: firstId, url: "" }],
    });
  };

  const handleSocialUpdate = (index: number, updates: Partial<SocialLink>) => {
    const next = [...data.socialLinks];
    next[index] = { ...next[index], ...updates };
    onUpdate({ ...data, socialLinks: next });
  };

  const handleSocialRemove = (index: number) => {
    onUpdate({
      ...data,
      socialLinks: data.socialLinks.filter((_, i) => i !== index),
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()} noValidate>
      {/* Kişisel */}
      <fieldset className="space-y-3">
        <legend className={SECTION_TITLE_CLASS}>Kişisel</legend>
        <div className="flex items-center gap-3">
          <HiUser className="h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ad"
            aria-label="Ad"
            tabIndex={0}
            className={INPUT_CLASS}
          />
        </div>
        <div className="flex items-center gap-3">
          <HiUser className="h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Soyad"
            aria-label="Soyad"
            tabIndex={0}
            className={INPUT_CLASS}
          />
        </div>
        <div className="flex items-center gap-3">
          <HiBriefcase className="h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleChange("title", e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Unvan (örn. Yazılım Geliştirici)"
            aria-label="Unvan"
            tabIndex={0}
            className={INPUT_CLASS}
          />
        </div>
        <div className="flex items-center gap-3">
          <HiBuildingOffice2 className="h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
          <input
            type="text"
            value={data.company}
            onChange={(e) => handleChange("company", e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Şirket Adı"
            aria-label="Şirket Adı"
            tabIndex={0}
            className={INPUT_CLASS}
          />
        </div>
      </fieldset>

      {/* İletişim */}
      <fieldset className="space-y-3">
        <legend className={SECTION_TITLE_CLASS}>İletişim</legend>
        <div className="flex gap-2">
          <select
            value={data.phoneCountryCode || DEFAULT_COUNTRY_CODE}
            onChange={(e) => handleChange("phoneCountryCode", e.target.value)}
            aria-label="Ülke kodu"
            tabIndex={0}
            className="w-[120px] shrink-0 rounded-xl border border-zinc-200 bg-white px-3 py-3 text-zinc-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
          >
            {COUNTRY_CODES.filter((c) => c.code !== "OTHER").map((c) => (
              <option key={c.code} value={c.dialCode}>
                {getCountryFlagEmoji(c.code)} {c.dialCode} {c.name}
              </option>
            ))}
          </select>
          <div className="flex flex-1 items-center gap-3">
            <HiPhone className="h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="5XX XXX XX XX"
              aria-label="Telefon numarası"
              tabIndex={0}
              className={INPUT_CLASS}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <HiEnvelope className="h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ornek@mail.com"
            aria-label="E-posta"
            tabIndex={0}
            className={INPUT_CLASS}
          />
        </div>
        <div className="flex items-center gap-3">
          <HiGlobeAlt className="h-5 w-5 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
          <input
            type="url"
            value={data.website}
            onChange={(e) => handleChange("website", e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="https://..."
            aria-label="Web Sitesi"
            tabIndex={0}
            className={INPUT_CLASS}
          />
        </div>
      </fieldset>

      {/* Sosyal Medya */}
      <fieldset className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <legend className={SECTION_TITLE_CLASS}>Sosyal Medya</legend>
          <button
            type="button"
            onClick={handleSocialAdd}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleSocialAdd()}
            tabIndex={0}
            aria-label="Sosyal medya hesabı ekle"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-violet-600 hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-950/30"
          >
            <HiPlus className="h-4 w-4" aria-hidden />
            Ekle
          </button>
        </div>
        {data.socialLinks.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &quot;Ekle&quot; ile platform seçip URL girebilirsiniz.
          </p>
        ) : (
          <ul className="space-y-3">
            {data.socialLinks.map((link, index) => (
              <li
                key={`${link.platformId}-${index}`}
                className="flex flex-wrap items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50/80 p-3 dark:border-zinc-700 dark:bg-zinc-800/50"
              >
                <SocialPlatformIcon
                  platformId={link.platformId}
                  className="h-5 w-5 shrink-0 text-zinc-600 dark:text-zinc-400"
                />
                <select
                  value={link.platformId}
                  onChange={(e) => handleSocialUpdate(index, { platformId: e.target.value })}
                  aria-label="Platform"
                  tabIndex={0}
                  className="min-w-[140px] rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
                >
                  {SOCIAL_PLATFORMS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => handleSocialUpdate(index, { url: e.target.value })}
                  onKeyDown={handleKeyDown}
                  placeholder={`${getPlatformName(link.platformId)} URL`}
                  aria-label={`${getPlatformName(link.platformId)} adresi`}
                  tabIndex={0}
                  className="min-w-0 flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm placeholder-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                />
                <button
                  type="button"
                  onClick={() => handleSocialRemove(index)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), handleSocialRemove(index))
                  }
                  tabIndex={0}
                  aria-label="Kaldır"
                  className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700 dark:hover:bg-zinc-600 dark:hover:text-zinc-200"
                >
                  <HiTrash className="h-4 w-4" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        )}
      </fieldset>
    </form>
  );
};
