import React, { createContext, useState } from "react";

export const RejectedCardContext = createContext();

export default function RejectedCardContextProvider(props) {
  const [rejectedCardsArr, setRejectedCardsArr] = useState([]);
  return (
    <RejectedCardContext.Provider
      value={{ rejectedCardsArr, setRejectedCardsArr }}
    >
      {props.children}
    </RejectedCardContext.Provider>
  );
}
