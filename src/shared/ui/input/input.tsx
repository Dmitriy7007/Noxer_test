import clsx from 'clsx'
import styles from './input.module.css'
import type { ComponentProps } from 'react'

export function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={clsx(styles.input, className)}
      {...props}
    />
  )
}
