import clsx from 'clsx';

import styles from './products-list.module.css';

import like from '@/shared/assets/svg/like.svg';
import type { Product } from '@/shared/type/types';
import { Badge } from '@/shared/ui/badge/badge';
import { Button } from '@/shared/ui/button/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card/card';
import { SliderWithControl } from '@/shared/ui/slider-with-control/slider-with-control';

export const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.productsList}>
      {products.map((product) => {
        const slides = product.images && product.images.map((image) => image?.Image_URL ?? '');
        console.log(slides);
        const badge = product.marks && product.marks.map((mark) => mark.Mark_Name);

        return (
          <Card key={product.id} className={styles.card}>
            <CardContent className={styles.cardImage}>
              <SliderWithControl
                slides={slides.length ? slides : ['./category.webp']}
                options={{ loop: true }}
                className={styles.slider}
              />
              {badge &&
                badge.map((mark, index) => (
                  <Badge
                    key={index}
                    className={clsx(
                      styles.cardBadge,
                      styles[`cardBadge_${index}`],
                      mark == 'hit' && styles.orangeColor,
                      mark == 'new' && styles.greenColor,
                      mark == 'sale' && styles.yellowColor,
                      mark == 'hot' && styles.redColor,
                      mark == 'предзаказ' && styles.blueColor,
                    )}>
                    {mark}
                  </Badge>
                ))}
              <img src={like} alt='иконка' width={17} height={15} className={styles.like} />
            </CardContent>
            <CardHeader className={styles.cardHeader}>
              <CardDescription>
                <span className={styles.price}>{product.price} ₽</span>
                <span className={styles.oldPrice}>{product.old_price}</span>
                {product.old_price && (
                  <span className={styles.discount}>
                    {-Math.round((product.old_price / product.price) * 100)} %
                  </span>
                )}
              </CardDescription>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>

            <CardFooter style={{ marginTop: 'auto' }}>
              <Button className={styles.cardButton}>Выбрать</Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
