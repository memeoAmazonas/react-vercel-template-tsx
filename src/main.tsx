import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '~/store';
import { INTLProvider } from '~/intl';
import { Routes } from '~/routes';
import './index.css';
import { ThemeMode } from '~/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeMode>
      <Provider store={store}>
        <INTLProvider>
          <Routes />
        </INTLProvider>
      </Provider>
    </ThemeMode>
  </React.StrictMode>,
);
