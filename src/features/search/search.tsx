import { Input } from '@/shared/ui/input/input'
import styles from './search.module.css'
import { Search } from 'lucide-react'

export const SearchInput = () => {
  return (
    <div className={styles.inputWrapper}>
      <Search className={styles.icon} />
      <Input
        placeholder='Найти товары'
        className={styles.input}
        name='search'
        id='search'
      />
    </div>
  )
}
