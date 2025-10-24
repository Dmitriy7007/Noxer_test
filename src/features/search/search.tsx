import { Search } from 'lucide-react';
import { useState, useRef } from 'react';

import styles from './search.module.css';

import { useManageProductsQuery } from '@/entities/products';
import { Input } from '@/shared/ui/input/input';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  resetPage?: () => void;
}

export const SearchInput = ({ searchTerm, setSearchTerm, resetPage }: SearchInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const blurTimeout = useRef<number | null>(null);
  const { data } = useManageProductsQuery();

  const popularSearches =
    data?.special_project_parameters_json?.fast_search_strings?.parameters_list ?? [];

  const handleSelect = (term: string) => {
    setSearchTerm(term);
    resetPage?.();
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (blurTimeout.current) clearTimeout(blurTimeout.current);
  };

  const handleBlur = () => {
    blurTimeout.current = setTimeout(() => setIsFocused(false), 150);
  };

  const showDropdown =
    isFocused && !searchTerm.trim() && Array.isArray(popularSearches) && popularSearches.length > 0;

  return (
    <div className={styles.inputWrapper}>
      <Search className={styles.icon} />
      <Input
        placeholder='Найти товары'
        className={styles.input}
        value={searchTerm}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          resetPage?.();
          setSearchTerm(e.target.value);
        }}
      />

      {showDropdown && (
        <div className={styles.dropdown}>
          <h3 className={styles.dropdownHeader}>Часто ищут</h3>
          {popularSearches.slice(0, 10).map((item) => (
            <div key={item} className={styles.dropdownItem} onMouseDown={() => handleSelect(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
