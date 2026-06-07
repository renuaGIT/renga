import CommonHero from "@/components/CommonHero";
import LastProjects from "@/components/LastProjects";
import WorkDescription from "@/components/Works/WorkDescription";
import WorkInsight from "@/components/Works/WorkInsight/WorkInsight";
import WorksContent from "@/components/Works/WorksContent/WorksContent";
import WorksDoubleGalleryAutoHeight from "@/components/Works/WorksDoubleGalleryAutoHeight";
import WorksDualDifferentHeightGallery from "@/components/Works/WorksDualDifferentHeightGallery";
import WorkSingleMedia from "@/components/Works/WorkSingleMedia";
import WorksTrippleGallery from "@/components/Works/WorksTrippleGallery/WorksTrippleGallery";
import WorksTrippleRowGallery from "@/components/Works/WorksTrippleRowGallery";

const descriptionData = {
  hiddenTitle: "looksrare renua",

  listsData: [
    {
      label: "Services",
      list: [
        "Brand Identity",
        "Product Design",
        "Motion Design",
        "Campaign Design",
      ],
    },
    {
      label: "Industry",
      list: ["Blockchain / Web3"],
    },
    {
      label: "Date",
      list: ["2024"],
    },
  ],
  textData: [
    "We partnered with PancakeSwap to explore a scalable visual system for Web3 products, campaigns and digital experiences.",
    "The project combined product thinking, motion systems and playful visual storytelling to create a more accessible and recognizable ecosystem.",
  ],
};

const galleryItem1 = {
  src: "/img/works/pancake-swap/gallery1.jpg",
  poster: null,
};
const galleryItem2 = {
  src: "",
  poster: "/img/works/pancake-swap/gallery2-poster.jpg",
};
const galleryItems3 = [
  { src: "", poster: "/img/works/pancake-swap/gallery3-1poster.jpg" },
  { src: "/img/works/pancake-swap/gallery3-2.jpg", poster: null },
];
const galleryItem4 = {
  src: "",
  poster: "/img/works/pancake-swap/gallery4-poster.jpg",
};
const galleryItem5 = {
  src: "",
  poster: "/img/works/pancake-swap/gallery5-poster.jpg",
};
const galleryItem6 = {
  src: "",
  poster: "/img/works/pancake-swap/gallery6-poster.jpg",
};
const galleryItems7 = [
  { src: "", poster: "/img/works/pancake-swap/gallery7-1poster.jpg" },
  { src: "", poster: "/img/works/pancake-swap/gallery7-2poster.jpg" },
];
const galleryItems8 = [
  { src: "/img/works/pancake-swap/gallery8-1.jpg", poster: null },
  { src: "/img/works/pancake-swap/gallery8-2.jpg", poster: null },
];
const galleryItem9 = {
  src: "",
  poster: "/img/works/pancake-swap/gallery9-poster.jpg",
};
const galleryItems10 = [
  { src: "", poster: "/img/works/pancake-swap/gallery10-1poster.jpg" },
  { src: "/img/works/pancake-swap/gallery10-2.jpg", poster: null },
];
const galleryItems11 = [
  { src: "", poster: "/img/works/pancake-swap/gallery11-1poster.jpg" },
  { src: "", poster: "/img/works/pancake-swap/gallery11-2poster.jpg" },
  { src: "", poster: "/img/works/pancake-swap/gallery11-3poster.jpg" },
];
const galleryItem12 = {
  src: "",
  poster: "/img/works/pancake-swap/gallery12-poster.jpg",
};
const galleryItems13 = [
  { src: "", poster: "/img/works/pancake-swap/gallery13-1poster.jpg" },
  { src: "", poster: "/img/works/pancake-swap/gallery13-2poster.jpg" },
  { src: "/img/works/pancake-swap/gallery13-3.jpg", poster: null },
];

const galleryItems14 = [
  { src: "", poster: "/img/works/pancake-swap/gallery14-1poster.jpg" },
  { src: "", poster: "/img/works/pancake-swap/gallery14-2poster.jpg" },
];

const galleryItem15 = {
  src: "",
  poster: "/img/works/pancake-swap/gallery15-poster.jpg",
};

const page = () => {
  return (
    <main>
      <CommonHero
        title={"PancakeSwap Wallet"}
        descr={
          "Brand identity and digital product exploration for a next-generation Web3 ecosystem."
        }
        posterUrl={"/img/works/pancake-swap/hero-poster.jpg"}
        videoUrl={"/img/works/pancake-swap/hero-video.webm"}
      />
      <WorksContent>
        <WorkDescription data={descriptionData} />
        <WorkSingleMedia item={galleryItem1} />
        <WorkInsight
          title={"Identity System"}
          descr={`Typography, layouts and digital assets designedto create a bold and recognizable ecosystem.`}
          isReversed={true}
        />
        <WorkSingleMedia item={galleryItem2} />
        <WorksDoubleGalleryAutoHeight items={galleryItems3} />
        <WorkInsight
          title={"Campaign Assets"}
          descr={`Flexible campaign visuals created for outdoor, social and launch communication.`}
        />
        <WorkSingleMedia item={galleryItem4} />
        <WorkInsight
          title={"Wallet Experience"}
          descr={`Product explorations focused on accessibility, clarity and mobile-first usability.`}
          isReversed={true}
        />
        <WorkSingleMedia item={galleryItem5} />
        <WorkSingleMedia item={galleryItem6} />
        <WorksDualDifferentHeightGallery
          items={galleryItems7}
          isReversed={true}
        />
        <WorkInsight
          title={"Visual Language"}
          descr={`Bold typography and modular compositions inspired by internet-native culture and digital communities.`}
          isReversed={true}
        />
        <WorksDoubleGalleryAutoHeight items={galleryItems8} />
        <WorkSingleMedia item={galleryItem9} />
        <WorksDoubleGalleryAutoHeight items={galleryItems10} />
        <WorkInsight
          title={"Brand Applications."}
          descr={`Supporting visual assets across merchandise, campaigns and ecosystem touchpoints.`}
        />
        <WorksTrippleRowGallery items={galleryItems11} />
        <WorkSingleMedia item={galleryItem12} />
        <WorksTrippleGallery items={galleryItems13} isReversed={true} />
        <WorkInsight
          title={"Motion & Illustration"}
          descr={`Playful character systems and motion-driven visuals designed for digital-first audiences.`}
        />
        <WorksDoubleGalleryAutoHeight items={galleryItems14} />
        <WorkSingleMedia item={galleryItem15} />
        <LastProjects bigItemTitle="Nobleblocks" smallItemTitle="Freedom Finance Bank" isReversed={true} />
      </WorksContent>
    </main>
  );
};

export default page;
