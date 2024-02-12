import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider as ReduxProvider } from 'react-redux';
import { Store } from './store';

import './styles/global.css'

import { App } from './pages/index.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={ Store }>
      <App/>
    </ReduxProvider>
  </React.StrictMode>
)
