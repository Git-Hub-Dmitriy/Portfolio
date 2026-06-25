import { getDictionary } from "@utils/getDictionary";
import { Dictionary } from "@interfaces/dictionary.types";
import Auth from "@views/Auth/Auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auth",
  description: "Auth page",
};

export default async function auth({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Auth dict={dict} />
    </>
  );
}
