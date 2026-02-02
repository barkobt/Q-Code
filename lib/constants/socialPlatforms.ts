/**
 * Social platforms for dropdown. Sorted by approximate monthly active users (most first).
 * id: slug for form state; name: display label.
 */
export type SocialPlatform = {
  id: string;
  name: string;
};

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: "facebook", name: "Facebook" },
  { id: "youtube", name: "YouTube" },
  { id: "whatsapp", name: "WhatsApp" },
  { id: "instagram", name: "Instagram" },
  { id: "tiktok", name: "TikTok" },
  { id: "wechat", name: "WeChat" },
  { id: "telegram", name: "Telegram" },
  { id: "snapchat", name: "Snapchat" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "x", name: "X (Twitter)" },
  { id: "pinterest", name: "Pinterest" },
  { id: "reddit", name: "Reddit" },
  { id: "discord", name: "Discord" },
  { id: "twitch", name: "Twitch" },
  { id: "tumblr", name: "Tumblr" },
  { id: "viber", name: "Viber" },
  { id: "line", name: "LINE" },
  { id: "github", name: "GitHub" },
  { id: "behance", name: "Behance" },
  { id: "dribbble", name: "Dribbble" },
  { id: "medium", name: "Medium" },
  { id: "spotify", name: "Spotify" },
  { id: "soundcloud", name: "SoundCloud" },
  { id: "flickr", name: "Flickr" },
  { id: "vimeo", name: "Vimeo" },
  { id: "quora", name: "Quora" },
  { id: "yelp", name: "Yelp" },
  { id: "meetup", name: "Meetup" },
  { id: "threads", name: "Threads" },
  { id: "mastodon", name: "Mastodon" },
  { id: "substack", name: "Substack" },
  { id: "patreon", name: "Patreon" },
  { id: "linktree", name: "Linktree" },
  { id: "bluesky", name: "Bluesky" },
  { id: "onlyfans", name: "OnlyFans" },
  { id: "bilibili", name: "Bilibili" },
  { id: "weibo", name: "Sina Weibo" },
  { id: "qq", name: "QQ" },
  { id: "stackoverflow", name: "Stack Overflow" },
  { id: "figma", name: "Figma" },
  { id: "notion", name: "Notion" },
];

export const getPlatformName = (id: string): string => {
  const p = SOCIAL_PLATFORMS.find((x) => x.id === id);
  return p ? p.name : id;
};
