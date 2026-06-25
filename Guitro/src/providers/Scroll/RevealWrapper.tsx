"use client";
import useScroll from "@providers/Scroll/useScroll";

export default function RevealWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useScroll();

  return (
    <div ref={ref} className="revealBox">
      <div className="animated-block">{children}</div>
    </div>
  );
}
