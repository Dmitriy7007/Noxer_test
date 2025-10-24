import type { EmblaOptionsType } from 'embla-carousel';
import { useEffect, useRef, useState } from 'react';

import { ErrorBoundary } from '../error-boundary/error-boundary';
import styles from './home.module.css';

import { useManageProductsQuery } from '@/entities/products';
import { MenuNavigation } from '@/features/menu-navigation/menu-navigation';
import { ProductsList } from '@/features/products-list/products-list';
import { SearchInput } from '@/features/search/search';
import { useProductSearch } from '@/features/search/useProductSearch';
import tg from '@/shared/assets/svg/tg.svg';
import type { Product } from '@/shared/type/types';
import { Badge } from '@/shared/ui/badge/badge';
import { LoaderSpin } from '@/shared/ui/loader/loader';
import { Slider } from '@/shared/ui/slider/slider';
import { SliderWithControl } from '@/shared/ui/slider-with-control/slider-with-control';

export const Home = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const { products, isLoading, setPage, resetPage, hasNext } = useProductSearch(1, searchTerm);

  const { data: productsData } = useManageProductsQuery();
  const category = productsData?.categories
    .filter((item) => item.Category_Image !== '' && item.Category_Image !== null)
    .slice(0, 6);

  const SLIDES_HERO = ['1.webp', '2.webp', '3.webp'];
  const OPTIONS_2: EmblaOptionsType = { align: 'start' };
  const OPTIONS_1: EmblaOptionsType = { loop: true };

  useEffect(() => {
    if (products?.length) {
      setAllProducts((prev) => {
        const newProducts = [...prev, ...products];
        const uniqueProductsMap = new Map<number, Product>();
        newProducts.forEach((p) => uniqueProductsMap.set(p.id, p));
        return Array.from(uniqueProductsMap.values());
      });
    }
  }, [products]);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasNext) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [isLoading, products, hasNext, setPage]);

  useEffect(() => {
    setAllProducts([]);
  }, [searchTerm]);

  return (
    <ErrorBoundary fallback={<p>Что-то пошло не так...</p>}>
      <MenuNavigation />
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} resetPage={resetPage} />
      <SliderWithControl slides={SLIDES_HERO} options={OPTIONS_1} />
      <Slider slides={category ?? []} options={OPTIONS_2} />
      <ProductsList products={allProducts} />
      {isLoading && (
        <div className={styles.loader} ref={loaderRef}>
          <LoaderSpin />
        </div>
      )}
      {!isLoading && <div ref={loaderRef} style={{ height: 1 }} />}
      <div className={styles.info}>
        <div className={styles.text}>Разработано на платформе Noxer</div>
        <Badge className={styles.badge}>
          <img src={tg} alt='tg' />
          noxerai_bot
        </Badge>
      </div>
    </ErrorBoundary>
  );
};
