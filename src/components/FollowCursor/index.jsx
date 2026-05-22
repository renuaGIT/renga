"use client";
import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./style.module.css";

const FollowCursor = ({ children }) => {
  const tooltipRef = useRef(null);
  const parentRef = useRef(null);


  const state = useRef({
    isHovered: false,
    x: 0,
    y: 0,
    container: null
  });

  useEffect(() => {
    const parent = parentRef.current?.parentElement;
    if (!parent) return;


    const container = document.createElement("div");
    document.body.appendChild(container);
    state.current.container = container;

    const updatePosition = () => {
      const tooltip = tooltipRef.current;
      if (!tooltip) return;

      const { x, y, isHovered } = state.current;
      const scale = isHovered ? 1 : 0;
      tooltip.style.transform = `translate3d(${x + 50}px, ${y + 40}px, 0) translate(-50%, -50%) scale(${scale})`;
    };

    const handleMouseMove = (e) => {
      state.current.x = e.clientX;
      state.current.y = e.clientY;
      updatePosition();
    };

    const handleMouseEnter = () => {
      state.current.isHovered = true;
      tooltipRef.current?.classList.add(styles.active);
      updatePosition();
    };

    const handleMouseLeave = () => {
      state.current.isHovered = false;
      tooltipRef.current?.classList.remove(styles.active);
      updatePosition();
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", handleMouseEnter);
    parent.addEventListener("mouseleave", handleMouseLeave);


    updatePosition();

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", handleMouseEnter);
      parent.removeEventListener("mouseleave", handleMouseLeave);


      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);


  const isClient = typeof window !== "undefined" && document.body;

  return (
    <>
      <span ref={parentRef} style={{ display: "none" }} />
      {isClient && document.body && createPortal(
        <div ref={tooltipRef} className={styles.tooltip}>
          {children}
        </div>,
        document.body
      )}
    </>
  );
};

export default FollowCursor;
