import { Product, ProductData } from "../types";

// готовим данные для UI слоя (преобразуем серверные модели в UI) для одного элемента
export const mapProductToUI = ({ uuid, title }: ProductData): Product => {
  return {
    id: uuid,
    name: title,
  }
}