import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Portfolio from "@views/Portfolio/Portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio page",
};

export default async function portfolio({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Portfolio dict={dict} />
    </>
  );
}
