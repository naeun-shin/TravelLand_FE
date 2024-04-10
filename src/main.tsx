import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Cookies, CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient();
const cookies = new Cookies();
console.log('cookies >>> main >> ', cookies.getAll());
console.log('뭐라도 뜨겠지..?');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </CookiesProvider>,
);
