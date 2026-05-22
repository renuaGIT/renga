import CommonHero from "@/components/CommonHero";
import LastProjects from "@/components/LastProjects";
import WorkDescription from "@/components/Works/WorkDescription";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksContent from "@/components/Works/WorksContent/WorksContent";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksTrippleGallery from "@/components/Works/WorksTrippleGallery/WorksTrippleGallery";

export const metadata = {
  title: "Nobleblocks — Blockchain Publishing Platform Design | Renua",

  description:
    "A blockchain publishing platform combining branding, product systems and scalable digital experiences for scientific publishing.",

  keywords: [
    "blockchain platform design",
    "scientific publishing platform",
    "Web3 product design",
    "SaaS product design",
    "digital publishing system",
    "blockchain branding",
  ],

  openGraph: {
    title: "Nobleblocks — Blockchain Publishing Platform Design | Renua",

    description:
      "A blockchain publishing platform designed for scalable scientific publishing systems.",
  },
};

const descriptionData = {
  hiddenTitle: "nobleblocks renua",

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
      list: ["Blockchain / Publishing"],
    },
    {
      label: "Date",
      list: ["2025"],
    },
  ],
  textData: [
    "A platform designed for digital research.",
    "Nobleblocks required a scalable visual and product system capable of supporting publishing tools, research workflows and blockchain-based infrastructure.",
  ],
};

const galleryItems1 = [
  { src: "/img/works/nobleblocks/gallery1-1.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery1-2.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery1-3.webp", poster: null },
];

const galleryItems2 = [
  { src: "/img/works/nobleblocks/gallery2-1.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery2-2.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery2-3.webm", poster: "/img/works/nobleblocks/gallery2-3poster.jpg" },
];

const galleryItems3 = [
  { src: "/img/works/nobleblocks/gallery3-1.webm", poster: "/img/works/nobleblocks/gallery3-1poster.jpg" },
  { src: "/img/works/nobleblocks/gallery3-2.webm", poster: "/img/works/nobleblocks/gallery3-2poster.jpg" },
  { src: "/img/works/nobleblocks/gallery3-3.svg", poster: null },
];

const galleryItems4 = [
  { src: "/img/works/nobleblocks/gallery4-1.webm", poster: "/img/works/nobleblocks/gallery4-1.svg" },
  { src: "/img/works/nobleblocks/gallery4-2.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery4-3.svg", poster: null },
];

const galleryItem5 = {
  src: "/img/works/nobleblocks/gallery5.webm",
  poster: "/img/works/nobleblocks/gallery5poster.jpg",
};

const galleryItem6 = {
  src: "/img/works/nobleblocks/gallery6.webm",
  poster: "/img/works/nobleblocks/gallery6poster.jpg",
};

const galleryItems7 = [
  { src: "/img/works/nobleblocks/gallery7-1.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery7-2.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery7-3.webm", poster: "/img/works/nobleblocks/gallery7-3poster.jpg" },
];

const galleryItem8 = {
  src: "/img/works/nobleblocks/gallery8.webp",
  poster: null,
};

const galleryItems9 = [
  { src: "/img/works/nobleblocks/gallery9-1.webm", poster: "/img/works/nobleblocks/gallery9-1poster.jpg" },
  { src: "/img/works/nobleblocks/gallery9-2.svg", poster: null },
  { src: "/img/works/nobleblocks/gallery9-3.webm", poster: "/img/works/nobleblocks/gallery9-3poster.jpg" },
];

const galleryItems10 = [
  { src: "/img/works/nobleblocks/gallery10-1.webp", poster: null },
  { src: "/img/works/nobleblocks/gallery10-2.webm", poster: "/img/works/nobleblocks/gallery10-2poster.jpg" },
  { src: "/img/works/nobleblocks/gallery10-3.webm", poster: "/img/works/nobleblocks/gallery10-3poster.jpg" },
];

const galleryItem11 = {
  src: "/img/works/nobleblocks/gallery11.webp",
  poster: null,
};

const galleryItems12 = [
  { src: "/img/works/nobleblocks/gallery12-1.webm", poster: "/img/works/nobleblocks/gallery12-1poster.jpg" },
  { src: "/img/works/nobleblocks/gallery12-2.webm", poster: "/img/works/nobleblocks/gallery12-2.svg" },
  { src: "/img/works/nobleblocks/gallery12-3.svg", poster: null },
];

const galleryItem13 = {
  src: "/img/works/nobleblocks/gallery13.webm",
  poster: "/img/works/nobleblocks/gallery13poster.jpg",
};

const galleryItem14 = {
  src: "/img/works/nobleblocks/gallery14.webm",
  poster: "/img/works/nobleblocks/gallery14poster.jpg",
};

const page = () => {
  return (
    <main>
      <CommonHero
        title={"Nobleblocks"}
        descr={
          "Creating a more flexible digital platform for blockchain-based scientific research and publishing."
        }
        posterUrl={"/img/works/nobleblocks/hero-poster.jpg"}
        videoUrl={"/img/works/nobleblocks/hero-video.webm"}
      />

      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorksTrippleGallery items={galleryItems1} />
        <WorkInsight
          title={"Extending the platform beyond the interface."}
          descr={`The visual identity expanded across campaigns, product communication and digital touchpoints — creating a more recognizable ecosystem around the platform.`}
        />
        <WorksTrippleGallery items={galleryItems2} />
        <WorksTrippleGallery items={galleryItems3} />
        <WorksTrippleGallery items={galleryItems4} />
        <WorkSingleMedia item={galleryItem5} />
        <WorkInsight
          title={"Built as a scalable visual system."}
          descr={`Typography, color and interface components were designed to move consistently across product and communication environments.`}
          isReversed={true}
        />
        <WorkSingleMedia item={galleryItem6} />
        <WorksTrippleGallery items={galleryItems7} />
        <WorkSingleMedia item={galleryItem8} />
        <WorksTrippleGallery items={galleryItems9} />
        <WorksTrippleGallery items={galleryItems10} />
        <WorkSingleMedia item={galleryItem11} />
        <WorkInsight
          title={"Designed around structure and accessibility."}
          descr={`The interface system focused on hierarchy, read ability and modular interaction patterns across complex publishing workflows.`}
        />
        <WorksTrippleGallery items={galleryItems12} />
        <WorkSingleMedia item={galleryItem13} />
        <WorkInsight
          title={"Publishing through a more contemporary lens."}
          descr={` The final system combined branding, product design and motion into a unified platform experience built for modern digital publishing.`}
        />
        <WorkSingleMedia item={galleryItem14} />

        <LastProjects smallItemTitle="NVO" bigItemTitle="Vodafone" />
      </WorksContent>
    </main>
  );
};

export default page;
