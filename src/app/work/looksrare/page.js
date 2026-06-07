import CommonHero from '@/components/CommonHero';
import LastProjects from '@/components/LastProjects';
import WorkDescription from '@/components/Works/WorkDescription';
import WorkInsight from '@/components/Works/WorkInsight/WorkInsight';
import WorksContent from '@/components/Works/WorksContent/WorksContent';
import WorksHalfGallery from '@/components/Works/WorksHalfGallery';
import WorkSingleMedia from '@/components/Works/WorkSingleMedia';
import WorksTrippleGallery from '@/components/Works/WorksTrippleGallery/WorksTrippleGallery';
import WorksTrippleRowGallery from '@/components/Works/WorksTrippleRowGallery';

export const metadata = {
  title: "LooksRare — NFT Marketplace Product Design & Branding | Renua",

  description:
    "A digital marketplace experience combining branding, UI systems and motion design for modern Web3 communities.",

  keywords: [
    "NFT marketplace design",
    "Web3 branding",
    "crypto product design",
    "marketplace UI UX",
    "digital asset platform",
    "motion design for Web3",
  ],

  openGraph: {
    title: "LooksRare — NFT Marketplace Product Design & Branding | Renua",
    description:
      "A digital marketplace experience combining branding, UI systems and motion design.",

    url: "https://renua.one/work/looksrare",
    siteName: "Renua",
    type: "website",
    images: [
      {
        url: "https://renua.one/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "LooksRare — NFT Marketplace Product Design & Branding by Renua",
      },
    ],
  },
};

const descriptionData = {
  hiddenTitle: "looksrare renua",

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
      list: ["Web3 / Marketplace"],
    },
    {
      label: "Date",
      list: ["2024"],
    },
  ],
  textData: [
    "A marketplace designed for digital culture.",
    "LooksRare required a scalable visual ecosystem capable of supporting marketplace interactions, community engagement and product communication across rapidly evolving digital environments."
  ],
};

const galleryItems1 = [
  { src: "/img/works/looksrare/gallery1-1.webm", poster: "/img/works/looksrare/gallery1-1poster.jpg" },
  { src: "/img/works/looksrare/gallery1-2.webp", poster: null },
  { src: "/img/works/looksrare/gallery1-3.webp", poster: null },
];

const galleryItem2 = { src: "/img/works/looksrare/gallery2.webm", poster: "/img/works/looksrare/gallery2poster.jpg" };

const galleryItem3 = { src: "/img/works/looksrare/gallery3.svg", poster: null };

const galleryItem4 = { src: "/img/works/looksrare/gallery4.webm", poster: "/img/works/looksrare/gallery4poster.jpg" };

const galleryItems5 = [
  { src: "/img/works/looksrare/gallery5-1.webp", poster: null },
  { src: "/img/works/looksrare/gallery5-2.webp", poster: null },
  { src: "/img/works/looksrare/gallery5-3.webp", poster: null },
]

const galleryItem6 = { src: "/img/works/looksrare/gallery6.svg", poster: null };

const galleryItem7 = { src: "/img/works/looksrare/gallery7.webm", poster: "/img/works/looksrare/gallery7poster.jpg" };

const galleryItems8 = [
  { src: "/img/works/looksrare/gallery8-1.svg", poster: null },
  { src: "/img/works/looksrare/gallery8-2.svg", poster: null },
  { src: "/img/works/looksrare/gallery8-3.webm", poster: "/img/works/looksrare/gallery8-3poster.jpg" },
]

const galleryItem9 = { src: "/img/works/looksrare/gallery9.webm", poster: "/img/works/looksrare/gallery9poster.jpg" };

const galleryItems10 = [
  { src: "/img/works/looksrare/gallery10-1.webp", poster: null },
  { src: "/img/works/looksrare/gallery10-2.webp", poster: null },
  { src: "/img/works/looksrare/gallery10-3.webp", poster: null },
]

const galleryItem11 = { src: "/img/works/looksrare/gallery11.webm", poster: "/img/works/looksrare/gallery11.jpg" };

const galleryItem12 = { src: "/img/works/looksrare/gallery12.webm", poster: "/img/works/looksrare/gallery12poster.jpg" };

const galleryItem13 = { src: "/img/works/looksrare/gallery13.webm", poster: "/img/works/looksrare/gallery13poster.jpg" };

const galleryItems14 = [
  { src: "/img/works/looksrare/gallery14-1.webm", poster: "/img/works/looksrare/gallery14-1poster.jpg" },
  { src: "/img/works/looksrare/gallery14-2.webp", poster: null },
  { src: "/img/works/looksrare/gallery14-3.webm", poster: "/img/works/looksrare/gallery14-3poster.jpg" },
]

const galleryItem15 = { src: "/img/works/looksrare/gallery15.webm", poster: "/img/works/looksrare/gallery15poster.jpg" };

const page = () => {
  return (
    <main>
      <CommonHero
        title={"Looksrare"}
        descr={
          "Designing a more expressive marketplace experience for a new era of digital assets and communities."
        }
        posterUrl={"/img/works/looksrare/hero-poster.jpg"}
        videoUrl={"/img/works/looksrare/hero-video.webm"}
      />

      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorksTrippleGallery items={galleryItems1} />
        <WorkInsight
          title={"Extending the identity beyond the platform"}
          descr={`The visual language expanded across campaigns, digital assets, apparel and motion systems — creating a more recognizable and immersive ecosystem around the product.`}
        />
        <WorkSingleMedia item={galleryItem2} />
        <WorkSingleMedia item={galleryItem3} />
        <WorkSingleMedia item={galleryItem4} />
        <WorksTrippleRowGallery items={galleryItems5} />
        <WorkSingleMedia item={galleryItem6} />
        <WorksHalfGallery item={galleryItem7} isReversed={true} />
        <WorksTrippleGallery items={galleryItems8} isReversed={true} />
        <WorkInsight
          title={"Built as a scalable visual system"}
          descr={`Typography, color and interface components were designed to move consistently across marketplace experiences, campaigns and communication touchpoints.`}
          isReversed={true}
        />
        <WorkSingleMedia item={galleryItem9} />
        <WorksTrippleRowGallery items={galleryItems10} />
        <WorkSingleMedia item={galleryItem11} />
        <WorkSingleMedia item={galleryItem12} />
        <WorkSingleMedia item={galleryItem13} />
        <WorkInsight
          title={"Designed around accessibility and interaction"}
          descr={`The product experience focused on hierarchy, usability and fast interaction flows across NFT discovery, trading and collection management.`}
          isReversed={true}
        />
        <WorksTrippleGallery items={galleryItems14} />
        <WorkInsight
          title={"A more expressive digital marketplace"}
          descr={`The final system combined branding, motion and product design into a unified experience built for modern digital communities.`}
        />
        <WorkSingleMedia item={galleryItem15} />
        <LastProjects smallItemTitle="Freedom Finance - Cards Series" bigItemTitle="Vodafone" />
      </WorksContent>
    </main>
  )
}

export default page;
