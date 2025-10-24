// ---------- Категории ----------
export interface CategoryImage {
  name: string;
  type: string;
  url: string;
}

export interface Category {
  Category_ID: number;
  Category_Image: string | null;
  Category_Name: string;
  category_images: CategoryImage[] | null;
  parent_category_id: number | null;
  sort_order: number;
}

// ---------- Изображения товара ----------
export interface ProductImage {
  Image_ID?: number;
  Image_URL?: string;
  image_url?: string;
  MainImage?: boolean;
  Product_ID?: number;
  position?: string | null;
  sort_order?: number;
  title?: string | null;
}

// ---------- Марки товара ----------
export interface ProductMark {
  Mark_Name: string;
  color_code: string;
}

// ---------- Товар ----------
export interface Product {
  id: number;
  name: string;
  price: number;
  old_price: number | null;
  images: ProductImage[];
  marks: ProductMark[];
}

// ---------- Пагинация ----------
export interface Pagination {
  current_page: number;
  has_next: boolean;
  has_prev: boolean;
  per_page: number;
  total_pages: number;
  total_products: number;
}

// ---------- Акции ----------
export interface SpecialProjectAction {
  action_type: string;
  description: string;
  extra_field_1: string;
  extra_field_2: string;
  id: number;
  image_url: string;
  sort_order: number;
  url: string | null;
}

// ---------- Бейджи ----------
export interface SpecialProjectBadge {
  description: string;
  extra_json: Record<string, unknown> | null;
  id: number;
  image_url: string;
  meaning_tag: string | null;
  sort_order: number;
  url: string;
}

// ---------- Прочее ----------
export interface SpecialProjectParameters {
  [key: string]: string;
}

export interface SpecialProjectParametersJSON {
  delivery_method?: {
    methods_list: {
      addr_points?: { address: string; name: string }[];
      description?: string;
      name: string;
      type: string;
    }[];
  };
  disabled_gpt_models?: {
    disabled_models: string[];
  };
  fast_search_strings?: {
    parameters_list: string[];
  };
  global_reviews?: {
    rating: number;
    title: string;
    total_ratings_count: number;
    url: string;
  };
  is_side_menu?: boolean;
  order_required_fields?: {
    required_fields: string[];
  };
  payment_buttons?: {
    afterpay_button_link: string;
    afterpay_button_text: string;
  };
  show_subcategories?: { show: boolean };
  softpay_button?: {
    afterpay_button_link: string;
    afterpay_button_text: string;
  };
  sum_cart_for_free_delivery?: {
    min_sum: string;
  };
}

// ---------- Основной ответ API ----------
export interface ProductsOnMainResponse {
  categories: Category[];
  id_mark_for_sale: number;
  pagination: Pagination;
  products: Product[];
  special_project_parameters: SpecialProjectParameters;
  special_project_parameters_actions: SpecialProjectAction[];
  special_project_parameters_badges: SpecialProjectBadge[];
  special_project_parameters_json: SpecialProjectParametersJSON;
  status: string;
}
