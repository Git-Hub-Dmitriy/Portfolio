import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import PrivacyPolicy from "@views/PrivacyPolicy/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy",
  description: "Policy page",
};
export default async function privacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <PrivacyPolicy dict={dict} />
    </>
  );
}
