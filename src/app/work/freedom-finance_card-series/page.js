import CommonHero from "@/components/CommonHero";
import LastProjects from "@/components/LastProjects";
import WorkDescription from "@/components/Works/WorkDescription";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksContent from "@/components/Works/WorksContent/WorksContent";
import WorksDoubleGallery from "@/components/Works/WorksDoubleGallery";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksTrippleGallery from "@/components/Works/WorksTrippleGallery/WorksTrippleGallery";

export const metadata = {
  title: "Freedom Finance Card Series — Fintech Card Design & 3D Visuals ",

  description:
    "A premium bank card series combining fintech branding, material exploration and cinematic 3D visual storytelling.",

  keywords: [
    "bank card design",
    "fintech visual identity",
    "payment card branding",
    "3D banking visuals",
    "financial product rendering",
    "premium card design",
  ],

  openGraph: {
    title: "Freedom Finance Card Series — Fintech Card Design & 3D Visuals ",
    description:
      "A premium fintech card series combining branding, materials and cinematic 3D visuals.",

    url: "https://renua.one/work/freedom-finance_card-series",
    siteName: "Renua",
    type: "website",
    images: [
      {
        url: "https://renua.one/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "Freedom Finance Card Series — Fintech Card Design & 3D Visuals by Renua",
      },
    ],
  },
};

const descriptionData = {
  hiddenTitle: "freedom finance card series renua",

  listsData: [
    {
      label: "Services",
      list: ["Art Direction", "3D Design", "Motion Design", "Visual Identity"],
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
    "Reimagining the physical banking experience.",
    "The project explored how financial products could feel more tactile, cinematic and emotionally connected through material, motion and visual storytelling.",
  ],
};

const galleryItems1 = [
  { src: "/img/works/freedom-finance-cards/gallery1-1.webm", poster: "/img/works/freedom-finance-cards/gallery1-1poster.jpg" },
  { src: "/img/works/freedom-finance-cards/gallery1-2.webp", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery1-3.webp", poster: null },
];

const galleryItems2 = [
  { src: "/img/works/freedom-finance-cards/gallery2-1.webm", poster: "/img/works/freedom-finance-cards/gallery2-1poster.jpg" },
  { src: "/img/works/freedom-finance-cards/gallery2-2.webp", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery2-3.webp", poster: null },
];

const galleryItem3 = {
  src: "/img/works/freedom-finance-cards/gallery3.webm",
  poster: "/img/works/freedom-finance-cards/gallery3-poster.jpg",
};

const galleryItems4 = [
  { src: "/img/works/freedom-finance-cards/gallery4-1.webp", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery4-2.webp", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery4-3.webm", poster: "/img/works/freedom-finance-cards/gallery4-3poster.jpg" },
];

const galleryItems5 = [
  { src: "/img/works/freedom-finance-cards/gallery5-1.webp", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery5-2.webp", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery5-3.webm", poster: "/img/works/freedom-finance-cards/gallery5-3poster.jpg" },
];

const galleryItems6 = [
  { src: "/img/works/freedom-finance-cards/gallery6-1.webp", poster: null },
  { src: "/img/works/freedom-finance-cards/gallery6-2.webp", poster: null },
];

const galleryItem7 = {
  src: "/img/works/freedom-finance-cards/gallery7.webm",
  poster: "/img/works/freedom-finance-cards/gallery7-poster.jpg",
};

const galleryItem8 = {
  src: "/img/works/freedom-finance-cards/gallery8.webm",
  poster: "/img/works/freedom-finance-cards/gallery8-poster.jpg",
};

const galleryItem9 = {
  src: "/img/works/freedom-finance-cards/gallery9.webm",
  poster: "/img/works/freedom-finance-cards/gallery9-poster.jpg",
};

const page = () => {
  return (
    <main>
      <CommonHero
        title={"Freedom Finance Bank — Card Series"}
        descr={
          "A conceptual card series exploring the intersection of finance, identity and product aesthetics"
        }
        posterUrl={"/img/works/freedom-finance-cards/hero-poster.jpg"}
        videoUrl={"/img/works/freedom-finance-cards/hero-video.webm"}
      />

      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorksTrippleGallery items={galleryItems1} />
        <WorkInsight
          title={"Built around product aesthetics"}
          descr={`We developed a series of card concepts combining industrial surfaces, motion-driven compositions and minimal visual systems.Each object was designed to feel premium, futuristic and digitally native.`}
        />
        <WorksTrippleGallery items={galleryItems2} />
        <WorkSingleMedia item={galleryItem3} />
        <WorkInsight
          title={"Exploring material and motion"}
          descr={`Light, texture and movement became central elements of the visual language — transforming static financial objects into dynamic product experiences.`}
        />
        <WorksTrippleGallery items={galleryItems4} isReversed={true} />
        <WorkInsight
          title={"A cinematic visual direction"}
          descr={`The system extended across still compositions, motion studies and experimental product renders designed for digital campaigns and brand storytelling.`}
        />
        <WorksTrippleGallery items={galleryItems5} isReversed={true} />
        <WorksDoubleGallery items={galleryItems6} />
        <WorkInsight
          title={"Finance through a future-facing lens. The final series blended"}
          descr={`industrial design aesthetics, motion and visual experimentation into a more expressive interpretation of modern financial products.`}
        />
        <WorkSingleMedia item={galleryItem7} />
        <WorkSingleMedia item={galleryItem8} />
        <WorkSingleMedia item={galleryItem9} />
        <LastProjects smallItemTitle="NVO" bigItemTitle="ApeAi" isReversed={true} />
      </WorksContent>
    </main>
  );
};

export default page;
