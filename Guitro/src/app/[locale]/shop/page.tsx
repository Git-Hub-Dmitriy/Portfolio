import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Shop from "@views/Shop/Shop";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop page",
};

export default async function shop({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Shop dict={dict} />
    </>
  );
}
