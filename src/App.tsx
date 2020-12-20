import { StoreProvider } from 'easy-peasy';
import { Grommet } from 'grommet';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Layout } from './components/Layout';
import { getStore } from './store';
import { theme } from './theme';

const queryClient = new QueryClient();
const store = getStore();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <StoreProvider store={store}>
      <Grommet full theme={theme}>
        <Layout />
      </Grommet>
    </StoreProvider>
  </QueryClientProvider>
);

export default App;
