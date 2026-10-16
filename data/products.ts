export type Product = {
  name: string;
  slug: string;
  category: string;
  tagline: string;
  logo: string;
  themeColor: string;
  fontFamily?: string;
  shortDescription: string;
  productUrl?: string;
  ctaLabel?: string;
};

// Theme colors are provisional estimates sampled from the supplied visual reference.
export const products = [
  {
    name: "Bamenya",
    slug: "bamenya",
    category: "AI chatbot",
    tagline: "AI that gets it.",
    logo: "/brand/bamenya-logo.png",
    fontFamily: "var(--font-panchang)",
    themeColor: "#0AA9E8",
    shortDescription: "AI that gets it.",
  },
  {
    name: "Melto",
    slug: "melto",
    category: "Food delivery app",
    tagline: "Good food, on its way.",
    logo: "/brand/melto-logo.png",
    fontFamily: "var(--font-panchang)",
    themeColor: "#F20B5B",
    shortDescription: "Good food, on its way.",
  },
  {
    name: "Zolga",
    slug: "zolga",
    category: "Dating app",
    tagline: "Dating, reimagined.",
    logo: "/brand/zolga-logo.png",
    fontFamily: "var(--font-panchang)",
    themeColor: "#FA7417",
    shortDescription: "Dating, reimagined.",
  },
  {
    name: "Funddy",
    slug: "justfundme",
    category: "Crowdsourced fundraising",
    tagline: "Big ideas need people.",
    logo: "/brand/just-fund-me.png",
    fontFamily: "var(--font-panchang)",
    themeColor: "#792FD0",
    shortDescription: "Big ideas need people.",
  },
  {
    name: "KGL-Life",
    slug: "kgl-life",
    category: "Kigali-focused realistic gaming platform",
    tagline: "Kigali, playable.",
    logo: "/brand/kgl-drive-logo.png",
    fontFamily: "var(--font-technor)",
    themeColor: "#84DC3D",
    shortDescription: "Kigali, playable.",
  },
] satisfies Product[];
