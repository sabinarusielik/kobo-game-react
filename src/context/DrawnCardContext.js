import React, { createContext, useReducer } from "react";
import { drawnCardReducer } from "../reducers/drawnCardReducer";

export const DrawnCardContext = createContext();

export default function DrawnCardContextProvider(props) {
  const [cardDrawnFromDeck, dispatch] = useReducer(drawnCardReducer, null);
  return (
    <DrawnCardContext.Provider value={{ cardDrawnFromDeck, dispatch }}>
      {props.children}
    </DrawnCardContext.Provider>
  );
}
