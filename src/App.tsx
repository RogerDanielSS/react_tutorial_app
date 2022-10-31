import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

//fonts MUI5
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//import logo from './logo.svg';
//import './App.css';

export const App = () => {
  return (
      <AppThemeProvider>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </AppThemeProvider>
  );
}

export default App;
