import { useQuery } from '@tanstack/react-query';

import type { FiltersType } from '../model/types';
import ProductsService from './service';

export const useManageProductsQuery = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['getProductsOnMain'],
    queryFn: () => ProductsService.getOnMain(),
  });

  return { data, isError, isLoading };
};

export const useFilteredProductsQuery = (
  params: { per_page?: number; page?: number } = {},
  filters: Partial<FiltersType> = {},
) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['getFilteredProducts', params, filters],
    queryFn: () => ProductsService.filterProducts(params, filters),
  });

  return { data, isError, isLoading };
};
