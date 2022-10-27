import { createContext, ReactNode, useReducer } from "react";
// Reducers
import { UIReducer } from "./uiReducer";

export interface UIState {
  menuActive: string;
  language: string;
}

const UIInitState: UIState = {
  menuActive: "",
  language: "__",
};

interface UIContextProps {
  state: UIState;
  setSelectedMenu: (menu: string) => void;
  setLanguage: (language: string) => void;
}

export const UIContext = createContext({} as UIContextProps);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  //******** Hooks ********//

  const [state, dispatch] = useReducer(UIReducer, UIInitState);

  //******** Methods ********//

  const setSelectedMenu = (menu: string) => {
    dispatch({ type: "selectedMenu", payload: menu });
  };

  const setLanguage = (language: string) => {
    dispatch({ type: "language", payload: language });
  };

  //******** Renders ********//

  return (
    <UIContext.Provider value={{ state, setSelectedMenu, setLanguage }}>
      {children}
    </UIContext.Provider>
  );
};
