import { Input } from '@/shared/ui/input/input'
import styles from './search.module.css'
import { Search } from 'lucide-react'

export const SearchInput = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string
  setSearchTerm: (value: string) => void
}) => (
  <div className={styles.inputWrapper}>
    <Search className={styles.icon} />
    <Input
      placeholder='Найти товары'
      className={styles.input}
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  </div>
)
