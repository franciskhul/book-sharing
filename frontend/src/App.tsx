import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import client from './utils/apolloClient';
import { CollapseDrawerProvider } from './context/CollapseDrawerContext';
import ThemeProvider from './theme';

import Router from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <CollapseDrawerProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </CollapseDrawerProvider>
        </ThemeProvider>
      </ApolloProvider>
    </HelmetProvider>
  )
}
