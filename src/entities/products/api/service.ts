import type { ProductsOnMainResponse } from '@/shared/type/types'
import type { ProductsFilterResponse, FiltersType } from '../model/types'

class ProductsService {
  private BASE_URL = 'https://noxer-test.ru/webapp/api/products'

  async getOnMain(): Promise<ProductsOnMainResponse> {
    const res = await fetch(`${this.BASE_URL}/on_main`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (!res.ok) {
      throw new Error(`Ошибка загрузки данных: ${res.status}`)
    }

    return res.json()
  }

  async filterProducts(
    params: { per_page?: number; page?: number } = {},
    filters: Partial<FiltersType> = {}
  ): Promise<ProductsFilterResponse> {
    const query = new URLSearchParams()
    if (params.per_page) query.append('per_page', String(params.per_page))
    if (params.page) query.append('page', String(params.page))

    const res = await fetch(`${this.BASE_URL}/filter?${query.toString()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filters),
    })

    if (!res.ok) {
      throw new Error(`Ошибка фильтрации: ${res.status}`)
    }

    return res.json()
  }
}

export default new ProductsService()
