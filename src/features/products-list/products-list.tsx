import type { Product } from '@/shared/type/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card/card'

import styles from './products-list.module.css'

export const ProductsList = ({ products }: { products: Product[] }) => {
  console.log(products)

  return (
    <div className={styles.productsList}>
      {products.map(product => (
        <Card>
          <CardContent>
            {/* <img src={product.images.} alt='картинка' /> */}
          </CardContent>
          <CardHeader>
            <CardDescription>
              {product.price} {product.old_price}
            </CardDescription>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>

          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
