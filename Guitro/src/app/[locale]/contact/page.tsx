import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Contact from "@views/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default async function contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Contact dict={dict} />
    </>
  );
}
