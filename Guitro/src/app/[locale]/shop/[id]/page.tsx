import Product from "@views/Product/Product";
import { Metadata } from "next";
import { Suspense } from "react";
import SkeletonProduct from "@views/Product/SkeletonProduct/SkeletonProduct";

export const metadata: Metadata = {
  title: "Product",
  description: "Product page",
};
export default async function product({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  return (
    <>
      <Suspense fallback={<SkeletonProduct />}>
        <Product params={params} />
      </Suspense>
    </>
  );
}
