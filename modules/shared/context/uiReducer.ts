import { UIState } from "./uiContext";

type IAction =
  | { type: "selectedMenu"; payload: string }
  | { type: "language"; payload: string };

export const UIReducer = (state: UIState, action: IAction): UIState => {
  switch (action.type) {
    case "selectedMenu":
      return {
        ...state,
        menuActive: action.payload,
      };
    case "language":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};
