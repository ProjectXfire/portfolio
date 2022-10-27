import { createContext, ReactNode, useReducer } from "react";
// Reducers
import { UIReducer } from "./uiReducer";

export interface UIState {
  menuActive: string;
  language: string;
  openSidebar: boolean;
}

const UIInitState: UIState = {
  menuActive: "",
  language: "__",
  openSidebar: false,
};

interface UIContextProps {
  state: UIState;
  setSelectedMenu: (menu: string) => void;
  setLanguage: (language: string) => void;
  setToggleSidebar: () => void;
}

export const UIContext = createContext({} as UIContextProps);

export const UIProvider = ({ children }: { children: ReactNode }) => {
  //******** Hooks ********//

  const [state, dispatch] = useReducer(UIReducer, UIInitState);

  //******** Methods ********//

  const setToggleSidebar = () => {
    dispatch({ type: "toggleSidebar" });
  };

  const setSelectedMenu = (menu: string) => {
    dispatch({ type: "selectedMenu", payload: menu });
  };

  const setLanguage = (language: string) => {
    dispatch({ type: "language", payload: language });
  };

  //******** Renders ********//

  return (
    <UIContext.Provider
      value={{ state, setSelectedMenu, setToggleSidebar, setLanguage }}
    >
      {children}
    </UIContext.Provider>
  );
};
