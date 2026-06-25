import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Cart from "@views/Cart/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart page",
};

export default async function cart({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Cart dict={dict} />
    </>
  );
}
