import { Product, ProductData } from "../types";

export const mapProductToUI = ({ uuid, title }: ProductData): Product => {
  return {
    id: uuid,
    name: title,
  }
}