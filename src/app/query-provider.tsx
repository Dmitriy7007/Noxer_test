import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'

export const QueryProvider = ({
  children,
  client,
}: PropsWithChildren<{ client?: QueryClient }>) => {
  const [queryClient] = useState(client ?? new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
