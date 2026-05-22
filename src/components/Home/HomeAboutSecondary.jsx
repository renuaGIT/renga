import Link from "next/link";

const HomeAboutSecondary = () => {
  return (
    <section className="about-secondary">
      <h3 className="visually-hidden">
        Renua is a digital design studio helping ambitious companies create
        brands, products and digital experiences that stand out and scale.
      </h3>
      <ul>
        <li>AI Products</li>
        <li>Fintech</li>
        <li>Digital Platforms</li>
        <li>Brand Systems</li>
        <li>Motion & 3D</li>
        <li>Web Experiences</li>
      </ul>
      <p>
        We design scalable digital products, visual systems and immersive brand
        experiences for modern technology companies.
      </p>
      <Link href="/about" scroll={true} className="about-secondary__more">
        About Renua
      </Link>
    </section>
  );
};

export default HomeAboutSecondary;
