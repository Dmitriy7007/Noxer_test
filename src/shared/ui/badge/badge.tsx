import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import type { ComponentProps } from 'react';

import styles from './badge.module.css';

type Variant = 'default' | 'secondary' | 'destructive' | 'outline';

interface BadgeProps extends ComponentProps<'span'> {
  variant?: Variant;
  asChild?: boolean;
}

export function Badge({ className, variant = 'default', asChild = false, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp data-slot='badge' className={clsx(styles.badge, styles[variant], className)} {...props} />
  );
}
