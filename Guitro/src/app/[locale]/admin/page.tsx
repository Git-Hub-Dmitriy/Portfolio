import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Dashboard from "@src/views/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page",
};

export default async function admin({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Dashboard dict={dict} />
    </>
  );
}
