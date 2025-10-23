import { Badge } from '@/shared/ui/badge/badge'
import { Button } from '@/shared/ui/button/button'
import { ChevronDown, Ellipsis, X } from 'lucide-react'
import styles from './menu-navigation.module.css'
import tg1 from '@/shared/assets/svg/tg1.svg'

export const MenuNavigation = () => {
  return (
    <div className={styles.menu}>
      <Button className={styles.button}>
        <X />
        Закрыть
      </Button>
      <Badge className={styles.badge}>
        <img src={tg1} alt='tg' />
        наш tg-канал
      </Badge>
      <Button className={styles.button}>
        <ChevronDown />
        <Ellipsis />
      </Button>
    </div>
  )
}
