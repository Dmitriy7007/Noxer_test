import clsx from 'clsx';
import type { ComponentProps } from 'react';

import styles from './card.module.css';

export function Card({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='card' className={clsx(styles.card, className)} {...props} />;
}

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='card-header' className={clsx(styles.cardHeader, className)} {...props} />;
}

export function CardTitle({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='card-title' className={clsx(styles.cardTitle, className)} {...props} />;
}

export function CardDescription({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-description'
      className={clsx(styles.cardDescription, className)}
      {...props}
    />
  );
}

export function CardAction({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='card-action' className={clsx(styles.cardAction, className)} {...props} />;
}

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div data-slot='card-content' className={clsx(styles.cardContent, className)} {...props} />
  );
}

export function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot='card-footer' className={clsx(styles.cardFooter, className)} {...props} />;
}
