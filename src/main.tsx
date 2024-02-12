import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider as ReduxProvider } from 'react-redux';
import { Store } from './store';

import './styles/global.css'

import { Player } from './pages/index.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={ Store }>
      <Player/>
    </ReduxProvider>
  </React.StrictMode>
)
