import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Account from "@views/Account/Account";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Account, profile user",
};

export default async function account({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Account dict={dict} />
    </>
  );
}
