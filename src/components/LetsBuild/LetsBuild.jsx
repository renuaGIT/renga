import './LetsBuild.css'
import Link from "next/link";

const LetsBuild = () => {
  return (
    <section className="lets-build">
      <h2 className="lets-build__title">
        Let’s build something meaningful
      </h2>
      <p className="lets-build__descr">
        Tell us what you’re building — we’ll help shape it.
      </p>
      <Link href="contact-us" className="lets-build__link">
        Start a project
      </Link>
    </section>
  );
};

export default LetsBuild;
