import * as TabsPrimitive from '@radix-ui/react-tabs'
import styles from './Tabs.module.css'
import type { ComponentProps } from 'react'
import clsx from 'clsx'

export function Tabs({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot='tabs'
      className={clsx(styles.tabs, className)}
      {...props}
    />
  )
}

export function TabsList({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={clsx(styles.tabsList, className)}
      {...props}
    />
  )
}

export function TabsTrigger({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      className={clsx(styles.tabsTrigger, className)}
      {...props}
    />
  )
}

export function TabsContent({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot='tabs-content'
      className={clsx(styles.tabsContent, className)}
      {...props}
    />
  )
}
