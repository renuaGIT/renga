import Image from "next/image";
import "./about.css";

import TestimonialsSlider from "@/components/Sliders/TestimonialsSlider";
import LetsBuild from "@/components/LetsBuild/LetsBuild";
import BorderedTitle from "@/components/BorderedTitle/BorderedTitle";

import { testimonialsList } from "@/lib/reviews";
import LastProjects from "@/components/LastProjects";
import HomePartners from "@/components/Home/Partners/HomePartners";
import CommonLink from "@/components/CommonLink";

export const metadata = {
  title: "About Renua — Digital Design Studio for AI, Fintech & SaaS",

  description:
    "Renua is an independent digital design studio focused on product design, brand identity, motion systems and digital experiences for ambitious technology companies.",

  keywords: [
    "digital design studio",
    "product design studio",
    "branding studio",
    "motion design studio",
    "AI design agency",
    "fintech design agency",
    "SaaS design studio",
    "technology design company",
    "digital product design",
    "brand identity studio",
  ],

  openGraph: {
    title: "About Renua",
    description:
      "Independent digital design studio creating brands, products and digital experiences for technology companies.",


    url: "https://renua.one/about",
    siteName: "Renua",
    type: "website",
    images: [
      {
        url: "https://renua.one/Renua_Preview.png",
        width: 1200,
        height: 630,
        alt: "About Renua — Digital Design Studio for AI, Fintech & SaaS",
      },
    ],
  },
};

const page = () => {
  return (
    <main className="about-content">
      <section>
        <h1 className="visually-hidden">
          We design brands, products and digital experiences for ambitious
          technology companies.
        </h1>
        <h2 className="about-content__title">About</h2>
        <p className="about-content__descr">
          We design brands, products and digital experiences for ambitious
          companies.
        </p>
        <Image
          src={"/img/about/studio.webp"}
          width={1528}
          height={1000}
          className="about-content__img"
          alt="team"
        />
      </section>

      <section className="about-studio">
        <BorderedTitle>What we believe</BorderedTitle>

        <div className="about-studio__info">
          <p>
            We believe modern companies are built through systems, not isolated
            design outputs.
          </p>
          <p>
            Brand, product, motion and technology should work together as one
            scalable experience.
          </p>
          <p>
            Our role is to create the clarity, consistency and momentum that
            helps companies grow.
          </p>
        </div>
      </section>

      <section className="about-studio">
        <BorderedTitle>What we do</BorderedTitle>
        <div className="about-studio__info">
          <p>
            Renua is an independent digital design studio focused on product
            design, brand identity, motion systems and digital experiences for
            modern technology companies.
          </p>
          <p>
            We partner with teams across AI, fintech, SaaS and emerging
            technologies to create scalable systems, intuitive products and
            distinctive visual identities.
          </p>
          <Image
            src={"/img/about/team.webp"}
            width={1011}
            height={1011}
            alt="studio"
          />
          <div className="about-studio__categories">
            <b>
              AI Products <br />
              Fintech <br />
              SaaS Platforms <br />
              Blockchain
            </b>
            <CommonLink url="">
              Explore Industries ↗
            </CommonLink>
          </div>
          <div className="about-studio__categories">
            <b>
              Product Design <br />
              Brand Systems <br />
              Motion & 3D <br />
              Web Experiences
            </b>
            <CommonLink url="">
              Explore Services ↗
            </CommonLink>
          </div>
        </div>
      </section>

      <HomePartners />

      <section className="about-team">
        <BorderedTitle>Team</BorderedTitle>
        <div className="about-team__info">
          <p className="about-team__descr">
            A distributed team of designers, strategists and motion specialists working across branding, product systems and digital experiences.
          </p>
          <b className="about-team__members">
            Imar Sagadeev, Nikolai Kharitonov, Tom Rumpf, Vlad Kursakov, Viktor
            Shulskiy, Azis Manoukian, Zarema Bikmeeva, Marat Vahitov, Rostislav
            Volokitin, Dana Bakhtina, Artem Kovalenko, Alexander Minaev, Ignacio
            Ibarra, Renat Muratshin, Olya Magarik, Eduardo, Georgy Karellin,
            Daria Lada, Aleksandr Levchenko, Arsen Jagaryan.
          </b>
        </div>
      </section>

      <TestimonialsSlider
        additionalClass="about-testimonials"
        testimonials={testimonialsList}
      />

      <LetsBuild />

      <LastProjects
        smallItemTitle="Freedom Finance Bank"
        bigItemTitle="Vodafone"
      />
    </main>
  );
};

export default page;
