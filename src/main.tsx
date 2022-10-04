import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { theme } from '~/theme';
import { Provider } from 'react-redux';
import { store } from '~/store';
import { INTLProvider } from '~/intl';
import { Routes } from '~/routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <INTLProvider>
          <Routes />
        </INTLProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
