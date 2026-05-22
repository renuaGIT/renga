import "./services.css";

import BorderedTitle from "@/components/BorderedTitle/BorderedTitle";
import LazyVideo from "@/components/LazyVideo";
import LetsBuild from "@/components/LetsBuild/LetsBuild";

const page = () => {
  return (
    <main className="services-content">
      <section>
        <h1 className="services-content__title">What we do</h1>
        <p className="services-content__descr">
          We design brands, products and digital experiences — from early
          concepts to production-ready systems.
        </p>
        <LazyVideo src={'/img/services/hero-video.webm'} poster={'/img/services/hero-poster.jpg'} className="services-content__top-video" />
      </section>

      <section className="services-features">
        <p className="services-features__sticky">
          <span>
            We work with startups and digital companies to design brands,
            products and websites.
          </span>
          <span>
            Our approach combines product thinking, visual design and execution
            — from concept to launch.
          </span>
        </p>
        <ul className="services-features__list">
          <li className="services-features__item">
            <b className="services-features__item-title">Product Design</b>
            <p className="services-features__item-descr">
              We design digital products that are clear, usable and built to
              scale.
            </p>
            <ul className="services-features__sublist">
              <li>Product strategy</li>
              <li>UX & flows</li>
              <li>Interface design</li>
              <li>Design systems</li>
              <li>Motion & interaction</li>
            </ul>
          </li>
          <li className="services-features__item">
            <b className="services-features__item-title">Web Experiences</b>
            <p className="services-features__item-descr">
              We design and build websites that are fast, scalable and
              production-ready.
            </p>
            <ul className="services-features__sublist">
              <li>Marketing websites</li>
              <li>Frontend development</li>
              <li>Performance</li>
              <li>Interactive elements</li>
            </ul>
          </li>
          <li className="services-features__item">
            <b className="services-features__item-title">
              Brand & Visual Identity
            </b>
            <p className="services-features__item-descr">
              We create brand systems that are distinctive, flexible and built
              for real use.
            </p>
            <ul className="services-features__sublist">
              <li>Identity systems</li>
              <li>Visual direction</li>
              <li>Illustration</li>
              <li>2D / 3D graphics</li>
              <li>Creative assets</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="services-process">
        <BorderedTitle>Process</BorderedTitle>
        <ul className="services-process__list">
          <li className="services-process__list-item" after="01">
            <b>Direction</b>
            <p>We define what matters — and what doesn’t.</p>
          </li>
          <li className="services-process__list-item" after="02">
            <b>Execution</b>
            <p>We design and build with precision and intent.</p>
          </li>
          <li className="services-process__list-item" after="03">
            <b>Growth</b>
            <p>We launch, learn, and continuously improve.</p>
          </li>
        </ul>
      </section>

      <LetsBuild />

      <section className="services-industries">
        <BorderedTitle>Industries</BorderedTitle>
        <p className="services-industries__descr">We work with teams building the <br/> future of digital products.</p>
        <b className="services-industries__text">Fintech, SaaS, Ecommerce, AI & Technology, Startups.</b>
      </section>
    </main>
  );
};

export default page;
