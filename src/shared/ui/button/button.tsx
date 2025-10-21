import { Slot } from '@radix-ui/react-slot'
import styles from './button.module.css'
import type { ComponentProps } from 'react'
import clsx from 'clsx'

type Variant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'

type Size = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  const sizeClassMap: Record<Size, string> = {
    default: styles.defaultSize,
    sm: styles.sm,
    lg: styles.lg,
    icon: styles.icon,
    'icon-sm': styles.iconSm,
    'icon-lg': styles.iconLg,
  }

  return (
    <Comp
      data-slot='button'
      className={clsx(
        styles.button,
        styles[variant],
        sizeClassMap[size],
        className
      )}
      {...props}
    />
  )
}
