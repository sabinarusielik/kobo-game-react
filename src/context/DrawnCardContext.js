import React, { createContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
import { drawnCardReducer } from "../reducers/drawnCardReducer";

export const DrawnCardContext = createContext();

export default function DrawnCardContextProvider({ children }) {
  const [cardDrawnFromDeck, dispatch] = useReducer(drawnCardReducer, null);

  const cardDrawnFromDeckContextProvider = useMemo(() => ({
    cardDrawnFromDeck,
    dispatch,
  }));

  return (
    <DrawnCardContext.Provider value={cardDrawnFromDeckContextProvider}>
      {children}
    </DrawnCardContext.Provider>
  );
}

DrawnCardContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
