// import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CollapseDrawerProvider } from './context/CollapseDrawerContext';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Router from './routes'

function App() {

  return (
    <CollapseDrawerProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </CollapseDrawerProvider>

  )
}

export default App
