import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import LostPass from "@views/LostPass/LostPass";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LostPassword",
  description: "LostPassword",
};

export default async function lostPassword({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <LostPass dict={dict} />
    </>
  );
}
