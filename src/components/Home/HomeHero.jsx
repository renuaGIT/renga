import FollowCursor from "../FollowCursor";
import LazyVideo from "../LazyVideo";

const HomeHero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        We design brands, products and digital <br />
        experiences for ambitious companies.
      </h1>
      <div>
        <LazyVideo
          src="/img/home/Tama.webm"
          poster="/img/home/hero-poster.jpg"
          className="hero__video"
        />
        <FollowCursor>Soon</FollowCursor>
      </div>
    </section>
  );
};

export default HomeHero;
