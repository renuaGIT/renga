"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./style.module.css";
import FollowCursor from "../FollowCursor";

const HeroSlider = ({ items }) => {
  const sliderRef = useRef(null);

  const quadrupleItems = [...items, ...items, ...items, ...items];

  const [isDragging, setIsDragging] = useState(false);

  const scrollState = useRef({
    baseAutoSpeed: 1.5,
    currentSpeed: 1.5,
    isInteracting: false,
    startX: 0,
    startScrollLeft: 0,
    dragSpeed: 0,
    lastX: 0,
  });

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;

    const updateScroll = () => {
      const data = scrollState.current;

      // Используем переменную isDragging из замыкания (из стейта)
      if (!isDragging && data.isInteracting) {
        data.currentSpeed += (data.baseAutoSpeed - data.currentSpeed) * 0.05;
        if (Math.abs(data.currentSpeed - data.baseAutoSpeed) < 0.01) {
          data.isInteracting = false;
        }
      }

      if (!isDragging) {
        slider.scrollLeft += data.currentSpeed;
      }

      const halfWidth = slider.scrollWidth / 2;
      if (slider.scrollLeft >= halfWidth) {
        slider.scrollLeft -= halfWidth;
        if (isDragging) data.startX += halfWidth;
      }
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft += halfWidth;
        if (isDragging) data.startX -= halfWidth;
      }

      animationFrameId = requestAnimationFrame(updateScroll);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      const data = scrollState.current;
      data.isInteracting = true;
      slider.scrollLeft += e.deltaY;
      data.currentSpeed = Math.sign(e.deltaY) * 3;
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    animationFrameId = requestAnimationFrame(updateScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener("wheel", handleWheel);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    const data = scrollState.current;
    setIsDragging(true);
    data.isInteracting = true;

    data.startX = e.pageX - sliderRef.current.offsetLeft;
    data.startScrollLeft = sliderRef.current.scrollLeft;
    data.lastX = e.pageX;
    data.currentSpeed = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const slider = sliderRef.current;
    const data = scrollState.current;
    const x = e.pageX - slider.offsetLeft;

    const walk = (x - data.startX) * 1.5;
    slider.scrollLeft = data.startScrollLeft - walk;

    data.dragSpeed = data.lastX - e.pageX;
    data.lastX = e.pageX;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;

    setIsDragging(false);
    const data = scrollState.current;
    data.currentSpeed = data.dragSpeed;
  };

  return (
    <div
      ref={sliderRef}
      className={styles.slider}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {quadrupleItems.map((item, index) => (
        <img
          src={item}
          key={index}
          alt=""
          className={styles.sliderImg}
          draggable="false"
        />
      ))}
      <FollowCursor>Drag or Scroll</FollowCursor>
    </div>
  );
};

export default HeroSlider;
