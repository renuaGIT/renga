import WorksContent from "@/components/Works/WorksContent/WorksContent";
import CommonHero from "@/components/CommonHero";
import WorkDescription from "@/components/Works/WorkDescription";
import WorksTrippleGallery from "@/components/Works/WorksTrippleGallery/WorksTrippleGallery";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksTrippleGallerySmall from "@/components/Works/WorksTrippleGallerySmall/WorksTrippleGallerySmall";
import WorksTrippleRowGallery from "@/components/Works/WorksTrippleRowGallery";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksDoubleGallery from "@/components/Works/WorksDoubleGallery";
import LastProjects from "@/components/LastProjects";

export const metadata = {
  title: "Freedom Finance — Fintech Product Design & Branding | Renua",

  description:
    "A fintech product experience combining branding, motion systems, digital interfaces and 3D visual storytelling for modern financial platforms.",

  keywords: [
    "fintech product design",
    "digital banking experience",
    "financial platform branding",
    "fintech UI UX",
    "motion design for fintech",
    "3D product visualization",
  ],

  openGraph: {
    title: "Freedom Finance — Fintech Product Design & Branding | Renua",
    description:
      "A fintech product experience combining branding, motion systems, digital interfaces and 3D visual storytelling.",

    url: "https://renua.one/work/freedom-finance",
    siteName: "Renua",
    type: "website",
    images: [
      {
        url: "https://renua.one/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "Freedom Finance — Fintech Product Design & Branding by Renua",
      },
    ],
  },
};

const descriptionData = {
  hiddenTitle: "freedom finance renua",

  listsData: [
    {
      label: "Services",
      list: [
        "Product Design",
        "Brand Identity",
        "Motion Design",
        "Campaign Design",
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
    "A financial platform built for clarity.",
    "Freedom Finance needed a more flexible and contemporary digital experience across product and brand.",
    "We created a scalable system designed around simplicity, usability and motion.",
  ],
};

const galleryItems1 = [
  { src: "/img/works/freedom-finance/gallery1-1.webm", poster: "/img/works/freedom-finance/gallery1-1poster.jpg" },
  { src: "/img/works/freedom-finance/gallery1-2.webp", poster: null },
  { src: "/img/works/freedom-finance/gallery1-3.webp", poster: null },
];

const galleryItems2 = [
  { src: "/img/works/freedom-finance/gallery2-1.webm", poster: "/img/works/freedom-finance/gallery2-1poster.jpg" },
  { src: "/img/works/freedom-finance/gallery2-2.webm", poster: "/img/works/freedom-finance/gallery2-2poster.jpg" },
  { src: "/img/works/freedom-finance/gallery2-3.svg", poster: null },
];

const galleryItems3 = [
  { src: "/img/works/freedom-finance/gallery3-1.webp", poster: null },
  { src: "/img/works/freedom-finance/gallery3-2.webp", poster: null },
  { src: "/img/works/freedom-finance/gallery3-3.webm", poster: "/img/works/freedom-finance/gallery3-3poster.jpg" },
];

const galleryItem4 = {src: "/img/works/freedom-finance/gallery4.webp", poster: null}

const galleryItems5 = [
  { src: "/img/works/freedom-finance/gallery5-1.webm", poster: "/img/works/freedom-finance/gallery5-1poster.jpg" },
  { src: "/img/works/freedom-finance/gallery5-2.webm", poster: "/img/works/freedom-finance/gallery5-2poster.jpg" },
  { src: "/img/works/freedom-finance/gallery5-3.webm", poster: "/img/works/freedom-finance/gallery5-3poster.jpg" },
];

const galleryItems6 = [
  { src: "/img/works/freedom-finance/gallery6-1.webm", poster: "/img/works/freedom-finance/gallery6-1poster.jpg" },
  { src: "/img/works/freedom-finance/gallery6-2.webm", poster: "/img/works/freedom-finance/gallery6-2poster.jpg" },
  { src: "/img/works/freedom-finance/gallery6-3.webm", poster: "/img/works/freedom-finance/gallery6-3poster.jpg" },
];

const galleryItems7 = [
  { src: "/img/works/freedom-finance/gallery7-1.webm", poster: "/img/works/freedom-finance/gallery7-1poster.jpg" },
  { src: "/img/works/freedom-finance/gallery7-2.webm", poster: "/img/works/freedom-finance/gallery7-2poster.jpg" },
  { src: "/img/works/freedom-finance/gallery7-3.jpg", poster: null },
];

const galleryItem8 = {src: "/img/works/freedom-finance/gallery8.webp", poster: null}

const galleryItems9 = [
  { src: "/img/works/freedom-finance/gallery9-1.webm", poster: "/img/works/freedom-finance/gallery9-1poster.jpg" },
  { src: "/img/works/freedom-finance/gallery9-2.webm", poster: "/img/works/freedom-finance/gallery9-2poster.jpg" },
  { src: "/img/works/freedom-finance/gallery9-3.webm", poster: "/img/works/freedom-finance/gallery9-3poster.jpg" },
];

const galleryItems10 = [
  { src: "/img/works/freedom-finance/gallery10-1.svg", poster: null},
  { src: "/img/works/freedom-finance/gallery10-2.webp", poster: null},
];

const galleryItem11 = {src: "/img/works/freedom-finance/gallery11.webm", poster: "/img/works/freedom-finance/gallery11.jpg"}

const page = () => {
  return (
    <main>
      <CommonHero
        title={"Freedom Finance Bank"}
        descr={
          "Designing a modern financial experience for a new generation of investors."
        }
        posterUrl={"/img/works/freedom-finance/hero-poster.jpg"}
        videoUrl={"/img/works/freedom-finance/hero-video.webm"}
      />

      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorksTrippleGallery items={galleryItems1} />
        <WorkInsight
          title={"Simplifying financial interaction"}
          descr={`The product experience focused on accessibility, hierarchy and speed —
          helping users navigate complex financial tools more intuitively.`}
        />
        <WorksTrippleGallery items={galleryItems2} />
        <WorksTrippleGallery items={galleryItems3} />
        <WorkSingleMedia item={galleryItem4} />
        <WorkInsight
          title={"Building a scalable visual system"}
          descr={`We developed a visual identity designed to work seamlessly across interfaces, campaigns and digital communication.`}
        />
        <WorksTrippleGallery items={galleryItems5} isReversed={true} />
        <WorksTrippleGallery items={galleryItems6} isReversed={true} />
        <WorksTrippleGallerySmall items={galleryItems7} />
        <WorkInsight
          title={"Motion across the ecosystem"}
          descr={`A series of campaign visuals and motion assets designed for product launches, outdoor placements and digital media.`}
        />
        <WorkSingleMedia item={galleryItem8} />
        <WorksTrippleRowGallery items={galleryItems9} />
        <WorksDoubleGallery items={galleryItems10} />
        <WorkInsight
          title={`Designed for modern investing`}
          descr={`The final system combined product, branding and motion into a unified financial experience built for scale.`}
        />
        <WorkSingleMedia item={galleryItem11} />
        <LastProjects smallItemTitle="NVO" bigItemTitle="Cruz" />
      </WorksContent>
    </main>
  );
};

export default page;
