export const allWorks = [
  {
    id: 0,
    picture: "/img/works/Freedom_bank.webp",
    video: "/img/home/works/Freedomfinance.webm",
    slug: "freedom-finance",
    name: "Freedom Finance",
    tags: ["Brand Identity", "Product Design"],
    isReady: true,
  },
  {
    id: 1,
    picture: "/img/works/vodafone/gallery1-3poster.jpg",
    video: "/img/works/vodafone/gallery1-3.webm",
    slug: "vodafone",
    name: "Vodafone",
    tags: ["Campaign Design", "Motion"],
    isReady: true,
  },
  {
    id: 2,
    picture: "/img/works/Cruz.webp",
    video: "/img/home/works/Cruz.webm",
    slug: "cruz",
    name: "Cruz",
    tags: ["Product Design", "Branding", "Motion"],
    isReady: true,
  },
  {
    id: 3,
    picture: "/img/works/Freedom_cards.webp",
    slug: "freedom-finance_card-series",
    name: "Freedom Finance — Card series",
    tags: ["3D Motion"],
    isReady: true,
  },
  {
    id: 4,
    picture: "/img/works/NVO.webp",
    slug: "nvo",
    name: "NVO",
    tags: ["Brand Identity", "Web Design"],
    isReady: true,
  },
  {
    id: 5,
    picture: "/img/works/nobleblocks.webp",
    video: "/img/home/works/Nobleblocks.webm",
    slug: "nobleblocks",
    name: "Nobleblocks",
    tags: ["Product Design", "Branding", "Motion"],
    isReady: true,
  },
  {
    id: 6,
    picture: "/img/works/looksrare.webp",
    video: "/img/home/works/Looksrare.webm",
    slug: "looksrare",
    name: "Looksrare",
    tags: ["Product Design", "Branding", "Motion"],
    isReady: true,
  },
  {
    id: 7,
    picture: "/img/works/ApeAi.webp",
    video: "/img/home/works/ApeAi.webm",
    slug: "ape-ai",
    name: "Ape AI",
    tags: ["Product Design", "Branding"],
    isReady: false,
  },
  {
    id: 8,
    picture: "/img/works/Pancakeswap.webp",
    video: "/img/works/Pancakeswap.webm",
    slug: "pancakeswap",
    name: "Pancakeswap",
    tags: ["Product Design", "Branding", "Motion"],
    isReady: true,
  },
  {
    id: 9,
    picture: "/img/works/Ape_badges.webp",
    slug: "ape-ai-achivement-badges",
    name: "Ape AI — Achievement Badges",
    tags: ["Illustration", "Branding"],
    isReady: false,
  },
  {
    id: 11,
    picture: "/img/works/Velas.webp",
    slug: "velas",
    name: "Velas",
    tags: ["Brand Identity", "Product Design ", "Motion"],
    isReady: false,
  },
  {
    id: 10,
    picture: "/img/works/Pancake.webp",
    video: "/img/works/Pancake.webm",
    slug: "pancake",
    name: "Pancake",
    tags: ["3D Motion", "Illustration"],
    isReady: false,
  },
  {
    id: 12,
    picture: "/img/works/Pranzo.webp",
    slug: "pranzo",
    name: "Pranzo",
    tags: ["Brand Identity", "Motion Design"],
    isReady: false,
  },
  {
    id: 13,
    picture: "/img/works/Tama.webp",
    video: "/img/home/Tama.webm",
    slug: "tama",
    name: "Tama",
    tags: ["Product Design", "Branding"],
    isReady: false,
  },
  {
    id: 14,
    picture: "/img/works/Eclipse_Parlays_fun.webp",
    slug: "eclipse",
    name: "Eclipse — Parlays fun",
    tags: ["Illustration", "3D Motion"],
    isReady: false,
  },
  {
    id: 15,
    picture: "/img/works/Polkadot.webp",
    slug: "polkadot",
    name: "Polkadot",
    tags: ["Campaign Design", "Motion Design"],
    isReady: false,
  },
  {
    id: 16,
    picture: "/img/works/Boba.webp",
    slug: "bobaswap",
    name: "Bobaswap",
    tags: ["Illustration", "Branding", "Motion"],
    isReady: false,
  },
  {
    id: 17,
    picture: "/img/works/NFT.webp",
    slug: "nft-collections",
    name: "NFT Collections",
    tags: ["Illustration", "Art Direction"],
    isReady: false,
  },
];

export function getWorksByCategory(category) {
  if (!category || category === "all") {
    return allWorks;
  }

  const cleanCategory = category.toLowerCase().replace(/[^a-z0-9]/g, "");

  return allWorks.filter((item) => {
    return item.tags.some((tag) => {
      const cleanTag = tag.toLowerCase().replace(/[^a-z0-9]/g, "");
      return cleanTag === cleanCategory;
    });
  });
}

export const worksSeoConfig = {
  all: {
    h1: "Selected work",
    descr:
      "A selection of recent projects across branding, product design and digital experiences for ambitious teams.",
    metaTitle: "Selected Work — Product Design, Branding & Motion ",
    metaDescr:
      "Selected product design, branding, fintech, AI and motion design projects created for startups and global technology companies.",
    keywords: [
      "product design portfolio",
      "branding portfolio",
      "AI product design",
      "fintech product design",
      "motion design portfolio",
      "digital agency portfolio",
    ],
  },
  "brand-identity": {
    h1: "Brand Identity Projects",
    descr:
      "Selected brand identity systems, visual languages and scalable design frameworks for ambitious technology companies.",
    metaTitle:
      "Brand Identity Projects — Technology Branding & Visual Systems ",
    metaDescr:
      "Selected brand identity projects, visual systems and scalable branding frameworks created for AI, fintech, SaaS and technology companies.",
    keywords: [
      "brand identity agency",
      "technology branding",
      "startup branding",
      "visual identity design",
      "brand systems",
      "fintech branding",
      "AI branding",
      "brand strategy studio",
    ],
  },
  "product-design": {
    h1: "Product Design Projects",
    descr:
      "Digital products, platforms and user experiences designed for growth, adoption and long-term scale.",
    metaTitle:
      "Product Design Projects — Digital Products & UX Systems ",
    metaDescr:
      "Digital products, SaaS platforms and user experiences designed for growth, usability and long-term scalability.",
    keywords: [
      "product design agency",
      "UX design studio",
      "SaaS product design",
      "startup product design",
      "design systems",
      "product strategy",
      "web application design",
      "digital product design",
    ],
  },
  "web-design": {
    h1: "Web Design Projects",
    descr:
      "Marketing websites, product experiences and digital platforms built to communicate clearly and convert effectively.",
    metaTitle:
      "Web Design Projects — Marketing Websites & Digital Experiences ",
    metaDescr:
      "High-performance marketing websites, digital platforms and web experiences designed for ambitious technology companies.",
    keywords: [
      "web design agency",
      "website design studio",
      "marketing website design",
      "startup website design",
      "technology website agency",
      "landing page design",
      "digital experiences",
      "webflow agency",
    ],
  },
  "motion-design": {
    h1: "Motion Design Projects",
    descr:
      "Motion systems, product animations and visual storytelling created to enhance digital experiences.",
    metaTitle:
      "Motion Design Projects — Animation & Visual Storytelling ",
    metaDescr:
      "Motion systems, animation frameworks and digital storytelling designed for brands, products and campaigns.",
    keywords: [
      "motion design agency",
      "product animation",
      "motion graphics studio",
      "UI animation",
      "brand motion systems",
      "explainer animation",
      "digital storytelling",
      "campaign animation",
    ],
  },
  illustration: {
    h1: "Illustration Projects",
    descr:
      "Custom illustration systems and visual assets designed for brands, products and digital platforms.",
    metaTitle: "Illustration Projects — Custom Illustration Systems ",
    metaDescr:
      "Custom illustration systems, visual assets and creative frameworks designed for modern technology brands.",
    keywords: [
      "illustration agency",
      "custom illustration",
      "brand illustration",
      "product illustration",
      "startup illustration",
      "digital illustration",
      "illustration systems",
      "visual storytelling",
    ],
  },
  "3D-motion": {
    h1: "3D Motion & Visual Systems",
    descr:
      "High-end 3D visuals, motion assets and immersive content for brands, products and campaigns.",
    metaTitle: "3D Motion Design — Visual Systems & Product Animation ",
    metaDescr:
      "High-end 3D visuals, motion systems and immersive digital content for technology brands and products.",
    keywords: [
      "3D motion design",
      "3D animation studio",
      "product visualization",
      "3D brand assets",
      "motion systems",
      "CGI animation",
      "3D design agency",
      "immersive visuals",
    ],
  },
  "campaign-design": {
    h1: "Campaign Design Projects",
    descr:
      "Creative campaigns, launch assets and marketing systems built to engage audiences and support growth.",
    metaTitle:
      "Campaign Design Projects — Creative Launches & Marketing Systems ",
    metaDescr:
      "Creative campaigns, launch systems and marketing assets designed to help technology companies grow and engage audiences.",
    keywords: [
      "campaign design agency",
      "marketing campaign design",
      "product launch campaign",
      "creative campaigns",
      "advertising design",
      "digital campaign assets",
      "growth marketing design",
      "brand campaigns",
    ],
  },
  "ai-platforms": {
    h1: "AI Product & Platform Design",
    descr:
      "Selected work across AI products, intelligent systems and emerging technologies shaping the future of digital experiences.",
    metaTitle:
      "AI Product Design — AI Platforms, Interfaces & Experiences ",
    metaDescr:
      "Selected AI products, intelligent systems and platform experiences designed for the next generation of technology companies.",
    keywords: [
      "AI product design",
      "AI design agency",
      "artificial intelligence UX",
      "AI platform design",
      "AI startup design",
      "machine learning interface",
      "generative AI products",
      "AI user experience",
    ],
  },
};
