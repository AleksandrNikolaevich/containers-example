import { ProductData } from "@entities/product"
import { ScreenData } from "../types"
import { mapProductToUI } from "@entities/product/libs"

// готовим данные для UI слоя (преобразуем серверные модели в UI) для целого экрана
export const mapDataToUI = (products: ProductData[]): ScreenData => {
  return {
    products: products.map(mapProductToUI)
  }
}