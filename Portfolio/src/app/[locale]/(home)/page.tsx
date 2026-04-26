import Home from "@views/Home/Home.server";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";

export default async function home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale ? locale : "en");

  return (
    <>
      <Home dictionary={dict} />
    </>
  );
}
