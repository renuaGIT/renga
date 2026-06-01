import Image from "next/image";
import "./about.css";

import TestimonialsSlider from "@/components/Sliders/TestimonialsSlider";
import LetsBuild from "@/components/LetsBuild/LetsBuild";
import BorderedTitle from "@/components/BorderedTitle/BorderedTitle";

import { testimonialsList } from "@/lib/reviews";
import LastProjects from "@/components/LastProjects";
import HomePartners from "@/components/Home/Partners/HomePartners";

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
  },
};


const page = () => {
  return (
    <main className="about-content">
      <section>
        <h1 className="visually-hidden">We design brands, products and digital experiences for ambitious technology companies.</h1>
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
        <BorderedTitle>Studio</BorderedTitle>
        <div className="about-studio__info">
          <p>
            We work with startups and digital companies — from early concepts to
            production-ready systems.
          </p>
          <p>We combine product thinking, visual design and execution.</p>
          <Image
            src={"/img/about/team.webp"}
            width={1011}
            height={1011}
            alt="studio"
          />
        </div>
      </section>

      <section className="about-facts">
        <BorderedTitle>Facts</BorderedTitle>
        <ul className="about-facts__list">
          <li className="about-facts__item">
            <b>23</b>
            <p>Team members</p>
          </li>
          <li className="about-facts__item">
            <b>11</b>
            <p>Years of experience</p>
          </li>
          <li className="about-facts__item">
            <b>Top 10</b>
            <p>Studio in Estonia</p>
          </li>
          <li className="about-facts__item">
            <b>10+</b>
            <p>International awards</p>
          </li>
          <li className="about-facts__item">
            <b>40+</b>
            <p>Projects delivered</p>
          </li>
        </ul>
      </section>

      <HomePartners />

      <section className="about-team">
        <BorderedTitle>Team</BorderedTitle>
        <div className="about-team__info">
          <p className="about-team__descr">
            A distributed team working across branding, product and digital
            experiences.
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

      <LastProjects smallItemTitle="Freedom Finance Bank" bigItemTitle="Vodafone" />
    </main>
  );
};

export default page;
