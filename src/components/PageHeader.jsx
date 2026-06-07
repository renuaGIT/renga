"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import Image from "next/image";

const links = [
  { name: "Work", url: "/work" },
  { name: "Services", url: "/services" },
  { name: "Clients", url: "/clients" },
  { name: "About", url: "/about" },
];

const PageHeader = () => {
  const headerRef = useRef();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false)

  useLenis(({direction}) => {
    if(!headerRef.current) return;

    if(direction === 1) {
      headerRef.current.classList.add('page-header--hidden')
    } else {
      headerRef.current.classList.remove('page-header--hidden')
    }
  })

  return (
    <header ref={headerRef} className={`page-header ${isOpen ? "opened" : ""}`}>
      <Link href="/" className="page-header__logo">
        <picture>
          <source srcSet="/img/logo-short.svg" media="(max-width: 767px)" />
          <Image src="/img/logo.svg" width={153} height={36} priority alt="RENUA logo" />
        </picture>
      </Link>

      <nav className="page-header__nav">
        {links.map((link) => (
          <Link
            className={pathname.includes(link.url) ? "active" : ""}
            href={link.url}
            key={link.url}
            onClick={closeMenu}
            scroll={true}
            prefetch={true}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <Link href="/contact-us" className="page-header__contact">
        Get in touch
      </Link>
      <button
        className="page-header__open-nav"
        onClick={() => setIsOpen(!isOpen)}
      ></button>
    </header>
  );
};

export default PageHeader;
