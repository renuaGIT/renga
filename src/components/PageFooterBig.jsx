import Link from "next/link";
import React from "react";

const PageFooterBig = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__top">
        <section className="page-footer__start">
          <h3>
            <span>Have a project in mind?</span>
            Let’s get to work.
          </h3>
          <Link href="/contact-us">Start a project</Link>
        </section>

        <ul className="page-footer__links">
          <li>
            Services
            <p>
              <Link href="">Brand Identity</Link>
              <Link href="">Product Design</Link>
              <Link href="">Web Design</Link>
              <Link href="">Development</Link>
              <Link href="">Motion</Link>
              <Link href="">AI Design</Link>
            </p>
          </li>

          <li>
            Agency
            <p>
              <Link href="/work">Work</Link>
              <Link href="/services">Services</Link>
              <Link href="/clients">Clients</Link>
              <Link href="/about">About</Link>
              <Link href="">Blog</Link>
              <Link href="">Privacy</Link>
            </p>
          </li>

          <li>
            Time zone
            <p>
              <time>
                Estonia, Tallinn <br />
                6:59 PM
              </time>

              <time>
                Switzerland, Geneva <br />
                7:29 PM
              </time>
            </p>
          </li>
        </ul>
      </div>

      <div className="page-footer__bottom">
        <small>© 2017–2026 Renua</small>

        <nav className="page-footer__contacts">
          <a href="mailto:hey@renua.one" className="mail">
            hey@renua.one
          </a>
          <a href="https://www.linkedin.com/company/renua_one" target="_blank" rel="noopener noreferrer" className="linkedin">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/renua.one" target="_blank" rel="noopener noreferrer" className="inst">
            Instagram
          </a>
          <a href="https://clutch.co/profile/renua" target="_blank" rel="noopener noreferrer" className="clutch">
            Clutch
          </a>
          <a href="https://www.behance.net/renua_one" target="_blank" rel="noopener noreferrer" className="behance">
            Behance
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default PageFooterBig;
