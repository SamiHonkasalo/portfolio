import React, { createContext, useReducer, Dispatch, useEffect } from 'react';
import uiReducer, { UIState, UIActions, UITypes } from './uiReducer';

const initialState: UIState = {
  sideDrawerOpen: true,
  sideDrawerTransitioned: true,
  themeMode: true,
  notifications: [] as NotificationType[],
  title: 'Portfolio',
};

interface UIContextInterface {
  state: UIState;
  dispatch: Dispatch<UIActions>;
}

const UIContext = createContext<UIContextInterface>({
  state: initialState,
  dispatch: () => null,
});

const UIProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  useEffect(() => {
    // On mount, check localStorage for theme
    const appTheme = localStorage.getItem('appTheme');
    if (appTheme === 'dark') {
      dispatch({
        type: UITypes.SET_DARK_THEME,
      });
    } else if (appTheme === 'light') {
      dispatch({
        type: UITypes.SET_LIGHT_THEME,
      });
    }
  }, []);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export { UIProvider, UIContext };
