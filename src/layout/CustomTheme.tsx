import React, { useMemo, useContext } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/';

import { UIContext } from '../store/ui/uiContext';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    sideDrawer: {
      width: React.CSSProperties['width'];
      closedWidth: React.CSSProperties['width'];
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    sideDrawer?: {
      width?: React.CSSProperties['width'];
      closedWidth?: React.CSSProperties['width'];
    };
  }
}

const CustomTheme: React.FC = ({ children }) => {
  const { state } = useContext(UIContext);
  const { themeMode } = state;

  const theme = useMemo(() => {
    return createMuiTheme({
      sideDrawer: {
        width: 200,
        closedWidth: 72,
      },
      palette: {
        type: themeMode ? 'dark' : 'light',
        primary: {
          main: '#546e7a',
        },
        secondary: {
          main: '#2e7d32',
        },
      },
    });
  }, [themeMode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
