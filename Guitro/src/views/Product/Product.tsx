import styles from "./Product.module.css";
import { Dictionary } from "@interfaces/dictionary.types";
import { prisma } from "@lib/prisma";
import { notFound } from "next/navigation";
import { ProductType } from "@interfaces/product.types";
import { getDictionary } from "@utils/getDictionary";
interface PropsProduct {
  params: Promise<{ locale: string; id: string }>;
}

export default async function Product(props: PropsProduct) {
  const { locale, id } = await props.params;
  const dict: Dictionary = await getDictionary(locale);

  const product: ProductType = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return notFound();
  }
  return <main className={styles.product}></main>;
}
