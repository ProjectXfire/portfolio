import { UIState } from "./uiContext";

type IAction =
  | { type: "selectedMenu"; payload: string }
  | { type: "toggleSidebar" }
  | { type: "language"; payload: string };

export const UIReducer = (state: UIState, action: IAction): UIState => {
  switch (action.type) {
    case "selectedMenu":
      return {
        ...state,
        menuActive: action.payload,
      };
    case "toggleSidebar":
      return { ...state, openSidebar: !state.openSidebar };
    case "language":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
