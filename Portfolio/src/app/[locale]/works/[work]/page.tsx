import Work from "@views/Work/Work.server";
import { getDictionary } from "@utils/getDictionary";
import { Dictionary } from "@interfaces/dictionary.types";

const locales = ["ru", "en"];
const works = ["0", "1", "2"];

export async function generateStaticParams() {
  const paths = locales.flatMap((locale) =>
    works.map((work) => ({
      locale: locale,
      work: work,
    })),
  );

  return paths;
}

export default async function work({
  params,
}: {
  params: {
    locale: string;
    work: string;
  };
}) {
  const { locale, work } = await params;
  const dict: Dictionary = await getDictionary(locale);

  return (
    <>
      <Work dict={dict} segment={work} />
    </>
  );
}
