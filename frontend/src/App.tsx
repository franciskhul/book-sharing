import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Router from './routes'

function App() {

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
