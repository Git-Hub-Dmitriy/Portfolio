"use client";

import { useContext, useRef, useEffect } from "react";
import { observerContext } from "@providers/Scroll/ScrollWrapper";

export default function useScroll() {
  const observer = useContext(observerContext);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const current = ref.current;
    if (current && observer) {
      observer.observe(current);
      return () => observer.unobserve(current);
    }
  }, [observer]);
  return ref;
}
