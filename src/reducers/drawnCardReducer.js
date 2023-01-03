export const ACTIONS = {
  DRAW: "draw",
  REJECT: "reject",
  REPLACE: "replace",
};

export const drawnCardReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DRAW:
      return (state = action.card);
    case ACTIONS.REJECT:
      return null;
    default:
      return state;
  }
};
