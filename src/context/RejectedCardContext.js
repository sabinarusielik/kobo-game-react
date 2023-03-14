import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const RejectedCardContext = createContext();

export default function RejectedCardContextProvider({ children }) {
  const [rejectedCardsArr, setRejectedCardsArr] = useState([]);

  const rejectedCardsArrContextProvider = useMemo(
    () => ({
      rejectedCardsArr,
      setRejectedCardsArr,
    }),
    [rejectedCardsArr]
  );

  return (
    <RejectedCardContext.Provider value={rejectedCardsArrContextProvider}>
      {children}
    </RejectedCardContext.Provider>
  );
}

RejectedCardContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
