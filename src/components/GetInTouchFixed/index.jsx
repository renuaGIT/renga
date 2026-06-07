"use client"
import { useRef } from 'react';
import styles from './style.module.css'
import Link from "next/link";
import { useLenis } from 'lenis/react';

const GetInTouchFixed = () => {
  const buttonRef = useRef();
  useLenis(({direction}) => {
    if(!buttonRef.current) return;

    if(direction === 1) {
      buttonRef.current.classList.add(styles.visible)
    } else {
      buttonRef.current.classList.remove(styles.visible)
    }
  })

  return (
    <Link ref={buttonRef} className={styles.contactUs} href="/contact-us">
      Get in touch
    </Link>
  );
};

export default GetInTouchFixed;
