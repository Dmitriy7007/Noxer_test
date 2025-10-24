import clsx from 'clsx';
import type { ComponentProps } from 'react';

import styles from './input.module.css';

export function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input type={type} data-slot='input' className={clsx(styles.input, className)} {...props} />
  );
}
