import {
  useFilteredProductsQuery,
  useManageProductsQuery,
  // useProductsFilterMutation,
} from '@/entities/products'

export const ProductList = () => {
  const { data } = useFilteredProductsQuery({ per_page: 10, page: 1 })

  const { data: products } = useManageProductsQuery()
  console.log(products)
  console.log(data)

  return <div>product-list</div>
}
