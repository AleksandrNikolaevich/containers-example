import { ProductData } from "@entities/product"
import { ScreenData } from "../types"
import { mapProductToUI } from "@entities/product/libs"

export const mapDataToUI = (products: ProductData[]): ScreenData => {
  return {
    products: products.map(mapProductToUI)
  }
}