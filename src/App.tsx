import { StoreProvider } from 'easy-peasy';
import { Grommet } from 'grommet';
import React from 'react';
import { Layout } from './components/Layout';
import { getStore } from './store';
import { theme } from './theme';

const store = getStore();

export const App: React.FC = () => (
  <StoreProvider store={store}>
    <Grommet full theme={theme}>
      <Layout />
    </Grommet>
  </StoreProvider>
);

export default App;
