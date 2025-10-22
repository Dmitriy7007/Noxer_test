import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import ProductsService from './service'
import type { ProductsOnMainResponse } from '@/shared/type/types'
import type { ProductsFilterRequest } from '../model/types'

export const useManageProductsQuery = (
  initialData?: ProductsOnMainResponse
) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['getProductsOnMain'],
    queryFn: () => ProductsService.getOnMain(),
    initialData,
  })

  return { data, isError, isLoading }
}

export const useFilteredProductsQuery = (
  params: { per_page?: number; page?: number } = {},
  body: ProductsFilterRequest = {}
) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['getFilteredProducts', params, body],
    queryFn: () => ProductsService.filterProducts(params, body),
  })

  return { data, isError, isLoading }
}

export const useProductsFilterMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (variables: {
      params?: { per_page?: number; page?: number }
      body?: ProductsFilterRequest
    }) =>
      ProductsService.filterProducts(
        variables.params || { per_page: 50, page: 1 },
        variables.body || {}
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getFilteredProducts'] })
    },
    onError: err => {
      console.error(err)
    },
  })
}
