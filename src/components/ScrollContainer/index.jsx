"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const ScrollReset = () => {
  const pathname = usePathname();
  const lenis = useLenis();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (!lenis) return;

    const isWorkTabTransition =
      prevPathname.current.startsWith("/work") && pathname.startsWith("/work");

    if (!isWorkTabTransition) {
      lenis.scrollTo(0, { immediate: true });
    }

    prevPathname.current = pathname;
  }, [pathname, lenis]);

  return null;
};

const ScrollContainer = ({ children }) => {
  const [shouldSmoothScroll, setShouldSmoothScroll] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isDesktopWidth = window.innerWidth >= 1280;

      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

      const shouldEnable = isDesktopWidth && hasFinePointer;

      setShouldSmoothScroll(shouldEnable);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const scrollOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
    syncTouch: true,
  };

  if (!shouldSmoothScroll) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={scrollOptions}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
};

export default ScrollContainer;
