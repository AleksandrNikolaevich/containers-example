/**
 * данные  этого типа сервак присылает. 
 * Мы используем кодогенерацию, поэтому руками эти типы не описываем, тут для примера положил
 */

export type ProductData = {
  uuid: string
  title: string
  subtitle: string
}

/**
 * UI "модель" 
 */
export type Product = {
  id: string;
  name: string;
}