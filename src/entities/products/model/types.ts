import type { Pagination, Product } from '@/shared/type/types';

export interface ProductsFilterResponse {
  products: Product[];
  pagination: Pagination;
  status: string;
  total: number;
  filters: FiltersType;
}

export interface FiltersType {
  category_ids: null | number[];
  color_ids: null | number[];
  in_stock: boolean;
  mark_ids: null | number[];
  price: null | number;
  search: null | string;
  sort_by: 'popularity';
  sort_desc: boolean;
  specifications: null | string;
}
