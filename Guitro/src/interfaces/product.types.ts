import { Decimal } from "@prisma/client/runtime/client";
export type ProductType = {
  id: number;
  sku: string;
  name: string;
  title: string;
  price: Decimal;
  oldPrice: Decimal | null;
  image: string;
  description: string;
  descriptionTwo: string | null;
  tags: string[];
  color: string[];
  size: string[];
  createdAt: Date;
  updatedAt: Date;
} | null;
