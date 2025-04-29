export const QUERY_KEYS = {
  all: ['products'],
  products: (filter: string) => [QUERY_KEYS.all, filter],
  product: (id: string) => [QUERY_KEYS.all, id]
} as const