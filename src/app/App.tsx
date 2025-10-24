import { QueryProvider } from './query-provider';

import { FooterApp } from '@/widgets/footer-app/footer-app';

function App() {
  return (
    <QueryProvider>
      <FooterApp />
    </QueryProvider>
  );
}

export default App;
