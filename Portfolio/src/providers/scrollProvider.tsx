"use client";

import React, { createContext, useEffect, useState } from "react";

export const observerContext = createContext<IntersectionObserver | null>(null);

export function ScrollProvider({
  children,
  options,
}: {
  children: React.ReactNode;
  options: IntersectionObserverInit;
}) {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const instance = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
          instance.unobserve(entry.target);
        } else {
          entry.target.classList.remove("reveal-active");
        }
      });
    }, options);

    setTimeout(() => setObserver(instance));
    return () => instance.disconnect();
  }, [options.rootMargin, options.threshold]);

  return (
    <>
      <observerContext.Provider value={observer}>
        {children}
      </observerContext.Provider>
    </>
  );
}
