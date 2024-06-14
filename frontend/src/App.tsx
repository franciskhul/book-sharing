import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import { CollapseDrawerProvider } from './context/CollapseDrawerContext';
import ThemeProvider from './theme';

import Router from './routes';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <CollapseDrawerProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CollapseDrawerProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
