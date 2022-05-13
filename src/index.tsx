import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

const darkTheme = createTheme({
  type: 'dark',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <ThemeProvider
          value={{ dark: darkTheme }}
          defaultTheme="dark"
          attribute="class"
        >
          <App />
        </ThemeProvider>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
