import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Blog from "@views/Blog/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page",
};

export default async function blog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Blog dict={dict} />
    </>
  );
}
