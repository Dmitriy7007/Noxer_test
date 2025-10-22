import { QueryProvider } from './query-provider'
import { Home } from '@/pages/home/home'

function App() {
  return (
    <QueryProvider>
      <Home />
    </QueryProvider>
  )
}

export default App
