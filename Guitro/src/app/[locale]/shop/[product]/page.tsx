import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Product from "@views/Product/Product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "Product page",
};
export default async function product({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Product dict={dict} />
    </>
  );
}
