export const QUERY_KEYS = {
  all: ['products'],
  product: (id: string) => [QUERY_KEYS.all, id]
} as const