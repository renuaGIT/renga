"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import FollowCursor from "../FollowCursor";
import LazyVideo from "../LazyVideo";

const WorksItem = ({ item }) => {
  const imgRef = useRef();

  useLenis(() => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      const shift = (rect.top + rect.height / 2 - windowHeight / 2) * 0.05;
      imgRef.current.style.transform = `translateY(${shift}px)`;
    }
  });

  return (
    <Link
      href={item.isReady ? `/work/${item.slug}` : "#"}
      scroll={true}
      className={`works-list__item ${!item.isReady ? "works-list__item--disabled" : ""}`}
      onClick={(e) => !item.isReady && e.preventDefault()}
    >
      <div className="works-list__parallax-wrapper">
        <div ref={imgRef} className="works-list__img-handler">
          <LazyVideo src={item.video} poster={item.picture} />
        </div>
      </div>

      <b>{item.name}</b>
      <ul>
        {item.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {!item.isReady && <FollowCursor>Soon</FollowCursor>}
    </Link>
  );
};

export default WorksItem;
