import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../query-keys"
import { ProductData } from "../types"

/**
 * Получаем список продуктов
 */
export const useGetProducts = (filter: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.products(filter),
    queryFn: async () => {
      return [] as ProductData[]
    },
  })
}