import { IProductStatus } from "@/interfaces/products";

export const DefaultStatus: { label: string; value: IProductStatus }[] = [
  {
    label: "Anunciado",
    value: "available"
  },
  {
    label: "Cancelado",
    value: "cancelled"
  },
  {
    label: "Vendido",
    value: "sold"
  }
];
