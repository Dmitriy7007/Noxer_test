import { useState, useEffect } from 'react'
import type { Product } from '@/shared/type/types'
import { useFilteredProductsQuery } from '@/entities/products'

export const useProductSearch = (initialPage = 1, searchTerm: string = '') => {
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm)
  const [page, setPage] = useState(initialPage)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedTerm(searchTerm), 300)
    return () => clearTimeout(handler)
  }, [searchTerm])

  useEffect(() => {
    setPage(1)
    setProducts([])
  }, [debouncedTerm])

  const { data, isLoading } = useFilteredProductsQuery(
    { per_page: 12, page },
    debouncedTerm ? { search: debouncedTerm } : {}
  )

  useEffect(() => {
    if (data?.products) {
      setProducts(prev => {
        const newProducts = [...prev, ...data.products]
        const uniqueProductsMap = new Map<number, Product>()
        newProducts.forEach(p => uniqueProductsMap.set(p.id, p))
        return Array.from(uniqueProductsMap.values())
      })
    }
  }, [data?.products, page])

  const hasNext = data?.pagination.has_next ?? false

  return { products, isLoading, page, setPage, hasNext }
}
