import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../query-keys"
import { ProductData } from "../types"

export const useGetProducts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.all,
    queryFn: async () => {
      return [] as ProductData[]
    },
  })
}