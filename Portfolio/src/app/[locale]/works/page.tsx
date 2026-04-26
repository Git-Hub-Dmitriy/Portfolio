import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Works from "@views/Works/Works.server";

export default async function works({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale ? locale : "en");

  return (
    <>
      <Works dict={dict} />
    </>
  );
}
