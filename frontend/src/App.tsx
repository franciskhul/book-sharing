import { BrowserRouter } from 'react-router-dom';
import { CollapseDrawerProvider } from './context/CollapseDrawerContext';
import ThemeProvider from './theme';

import Router from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <CollapseDrawerProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CollapseDrawerProvider>
    </ThemeProvider>
  )
}
