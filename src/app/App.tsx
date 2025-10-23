import { FooterApp } from '@/widgets/footer-app/footer-app'
import { QueryProvider } from './query-provider'

function App() {
  return (
    <QueryProvider>
      <FooterApp />
    </QueryProvider>
  )
}

export default App
