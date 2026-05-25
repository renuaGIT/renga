import "./clients.css";

import HomePartners from "@/components/Home/Partners/HomePartners";
import TestimonialsSlider from "@/components/Sliders/TestimonialsSlider";
import LetsBuild from "@/components/LetsBuild/LetsBuild";
import BorderedTitle from "@/components/BorderedTitle/BorderedTitle";
import { testimonialsList } from "@/lib/reviews";
import HeroSlider from "@/components/HeroSlider";

export const metadata = {
  title: "Clients — Renua Design Agency",

  description:
    "We partner with startups and global companies across fintech, SaaS, AI and digital products.",

  keywords: [
    "design agency clients",
    "startup clients",
    "saas clients",
    "agency collaborations",
    "digital product clients",
  ],
};

const collaborationsList = [
  {
    name: "Vodafone",
    descr:
      "Brand campaign and digital \n experience for a global \n telecommunications company.",
  },
  {
    name: "Huawei",
    descr:
      "Design support across internal \n platforms and digital interfaces.",
  },
  {
    name: "Ford",
    descr: "UI design for in-vehicle systems and \n dashboard interfaces.",
  },
  {
    name: "AMC+",
    descr: "Product design for a streaming \n platform.",
  },
  {
    name: "Abbott",
    descr: "Brand and digital experience for \n healthcare products.",
  },
  {
    name: "Ape Ai",
    descr: "Product design for an AI-driven \n workflow platform.",
  },
  {
    name: "Freedom Finance KZ",
    descr: "Brand identity and product design for \n a financial platform.",
  },
  {
    name: "Eclipse.xyz",
    descr: "Mascot design, brand identity and \n motion system.",
  },
  {
    name: "Polkadot",
    descr: "Branding and visual system for a \n Web3 ecosystem.",
  },
  {
    name: "Layer3.xyz",
    descr: "Illustration system and motion design \n for a digital platform.",
  },
  {
    name: "Optimism",
    descr: "Campaign and visual system design \n for a Web3 ecosystem.",
  },
  {
    name: "Yield.xyz",
    descr:
      "Motion and 3D design  for a series of \n films for a Web3 platform.",
  },
  {
    name: "Nobleblocks",
    descr:
      "Brand identity and product design for \n a blockchain-based publishing \n platform.",
  },
  {
    name: "Binance",
    descr: "Design support across internal \n products and visual systems.",
  },
  {
    name: "Fantasy",
    descr: "Motion and 3D design across digital \n products.",
  },
  {
    name: "Looksrare",
    descr: "Product design for a digital asset \n marketplace.",
  },
  {
    name: "Twotwentyk",
    descr: "Product design and branding for an \n NFT trading platform.",
  },
  {
    name: "Voila",
    descr: "Motion concept and direction across \n a series of digital campaigns.",
  },
  {
    name: "Pancakeswap",
    descr: "Illustration system for a digital wallet.",
  },
  {
    name: "Papara",
    descr: "Product design concept for a digital \n payment platform in Turkey.",
  },
  {
    name: "NVO",
    descr:
      "Brand identity, product design and \n motion system for a digital wallet.",
  },
   {
    name: "SmartCredit",
    descr: "Brand identity and platform design for \n a credit product.",
  },
  {
    name: "Velas",
    descr:
      "Brand campaign and digital \n experience design  for a global \n telecommunications company.",
  },
  {
    name: "Coinpayments",
    descr: "Product design for a digital asset \n exchange platform.",
  },







];

const heroPictures = [
  "/img/clients/1.webp",
  "/img/clients/2.webp",
  "/img/clients/3.webp",
  "/img/clients/4.webp",
  "/img/clients/5.webp",
  "/img/clients/6.webp",
  "/img/clients/7.webp",
];

const page = () => {
  return (
    <main className="clients-content">
      <section>
        <h1 className="clients-content__title">Clients</h1>
        <p className="clients-content__descr">
          We partner with startups and global companies to design brands,
          products and digital experiences.
        </p>
        <HeroSlider items={heroPictures} />
        <p className="clients-content__text">
          We partner with teams across fintech, SaaS, AI and emerging
          technologies.
        </p>
      </section>

      <div className="clients-content__wrapper">
        <HomePartners />

        <TestimonialsSlider testimonials={testimonialsList} />

        <section className="clients-collaborations">
          <BorderedTitle>Selected collaborations</BorderedTitle>
          <ul className="clients-collaborations__list">
            {collaborationsList.map((company, index) => (
              <li className="clients-collaborations__item" key={index}>
                <b>{company.name}</b>
                <p>{company.descr}</p>
              </li>
            ))}
          </ul>
        </section>

        <LetsBuild />

        <section className="clients-industries">
          <BorderedTitle>Industries</BorderedTitle>
          <b>
            We work with teams across fintech, SaaS, AI and emerging
            technologies.
          </b>
        </section>
      </div>
    </main>
  );
};

export default page;
