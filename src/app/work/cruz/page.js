import CommonHero from "@/components/CommonHero";
import LastProjects from "@/components/LastProjects";
import WorkDescription from "@/components/Works/WorkDescription";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksContent from "@/components/Works/WorksContent/WorksContent";
import WorksDualHeightGallery from "@/components/Works/WorksDiagonalGallery";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksTrippleGallery from "@/components/Works/WorksTrippleGallery/WorksTrippleGallery";
import WorksTrippleGallerySmall from "@/components/Works/WorksTrippleGallerySmall/WorksTrippleGallerySmall";

export const metadata = {
  title: "Cruz — Fintech App Branding & Product Design | Renua",

  description:
    "A mobile fintech experience combining product design, motion systems and expressive visual identity for digital finance products.",

  keywords: [
    "fintech app design",
    "mobile banking UI",
    "digital finance branding",
    "financial product identity",
    "product design for fintech startups",
    "motion and illustration system",
  ],

  openGraph: {
    title: "Cruz — Fintech App Branding & Product Design | Renua",
    description:
      "A mobile fintech experience combining product design, motion systems and expressive visual identity.",

    url: "https://renua.one/work/cruz",
    siteName: "Renua",
    type: "website",
    images: [
      {
        url: "https://renua.one/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "Cruz — Fintech App Branding & Product Design by Renua",
      },
    ],
  },
};

const descriptionData = {
  hiddenTitle: "cruz renua",

  listsData: [
    {
      label: "Services",
      list: [
        "Product Design",
        "Brand Identity",
        "Motion Design",
        "Illustration",
      ],
    },
    {
      label: "Industry",
      list: ["Fintech"],
    },
    {
      label: "Recognition",
      list: ["Behance Featured"],
    },
  ],
  textData: [
    "A more human financial product.",
    "Cruz was designed to challenge the visual language of traditional finance — creating a product experience that feels more accessible, expressive and culturally relevant.",
  ],
};

const galleryItems1 = [
  { src: "/img/works/cruz/gallery1-1.webm", poster: "/img/works/cruz/gallery1-1poster.jpg" },
  { src: "/img/works/cruz/gallery1-2.webp", poster: null },
  { src: "/img/works/cruz/gallery1-3.webp", poster: null },
];

const galleryItems2 = [
  { src: "/img/works/cruz/gallery2-1.svg", poster: null },
  { src: "/img/works/cruz/gallery2-2.webp", poster: null },
  { src: "/img/works/cruz/gallery2-3.webp", poster: null },
];

const galleryItem3 = { src: "/img/works/cruz/gallery3.webm", poster: "/img/works/cruz/gallery3poster.jpg" };

const galleryItem4 = { src: "/img/works/cruz/gallery4.svg", poster: null };

const galleryItems5 = [
  { src: "/img/works/cruz/gallery5-1.webp", poster: null },
  { src: "/img/works/cruz/gallery5-2.webm", poster: "/img/works/cruz/gallery5-2poster.jpg" },
  { src: "/img/works/cruz/gallery5-3.webp", poster: null },
  { src: "/img/works/cruz/gallery5-4.webp", poster: null },
];

const galleryItemTerminal = { src: "/img/works/cruz/terminal.webm", poster: "/img/works/cruz/terminal-poster.jpg" };

const galleryItem6 = { src: "/img/works/cruz/gallery6.webp", poster: null };
const galleryItem7 = { src: "/img/works/cruz/gallery7.webp", poster: null };

const galleryItems8 = [
  { src: "/img/works/cruz/gallery8-1.webp", poster: null },
  { src: "/img/works/cruz/gallery8-2.webm", poster: "/img/works/cruz/gallery8-2poster.jpg" },
  { src: "/img/works/cruz/gallery8-3.webm", poster: "/img/works/cruz/gallery8-3poster.jpg" },
];

const galleryItem9 = { src: "/img/works/cruz/gallery9.webp", poster: null };
const galleryItem10 = { src: "/img/works/cruz/gallery10.webp", poster: null };
const galleryItem11 = { src: "/img/works/cruz/gallery11.webm", poster: "/img/works/cruz/gallery11poster.jpg" };
const galleryItem12 = { src: "/img/works/cruz/gallery12.webp", poster: null };

const page = () => {
  return (
    <main>
      <CommonHero
        title={"Cruz"}
        descr="Designing a more expressive financial experience for a new generation of users."
        posterUrl={"/img/works/cruz/hero-poster.jpg"}
        videoUrl={"/img/works/cruz/hero-video.webm"}
      />
      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorksTrippleGallery items={galleryItems1} />
        <WorkInsight
          title={"Building personality into finance"}
          descr={`Typography, motion and illustration combined into a more distinctive financial identity across product and brand communication.`}
        />
        <WorksTrippleGallerySmall items={galleryItems2} />
        <WorkSingleMedia item={galleryItem3} />
        <WorkInsight
          title={"Designed as a scalable visual system"}
          descr={`A flexible identity built to move consistently across interfaces, campaigns and digital touchpoints.`}
        />
        <WorkSingleMedia item={galleryItem4} />
        <WorksDualHeightGallery items={galleryItems5} />
        <WorkSingleMedia item={galleryItemTerminal} />
        <WorkInsight
          title={"Product-first interaction design"}
          descr={`Designed for speed, clarity and accessibility across mobile interactions.`}
        />
        <WorkSingleMedia item={galleryItem6} />
        <WorkSingleMedia item={galleryItem7} />
        <WorksTrippleGallery items={galleryItems8} />
        <WorkInsight
          title={"Motion across the ecosystem"}
          descr={`A series of animated assets and visual systems extended the product language across campaigns, social media and digital experiences.`}
        />
        <WorkSingleMedia item={galleryItem9} />
        <WorkSingleMedia item={galleryItem10} />
        <WorkInsight
          title={"Designed for modern financial culture"}
          descr={`The final system merged branding, motion and product design into a unified experience built for a younger digital audience.`}
        />
        <WorkSingleMedia item={galleryItem11} />
        <WorkSingleMedia item={galleryItem12} />
        <LastProjects smallItemTitle="Freedom Finance Bank" bigItemTitle="Nobleblocks" isReversed={true} />
      </WorksContent>
    </main>
  );
};

export default page;
