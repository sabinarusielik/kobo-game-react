export const ACTIONS = {
  DRAW: "draw",
  REJECT: "reject",
  REPLACE: "replace",
};

export const drawnCardReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DRAW: {
      let stateCard = state;
      stateCard = action.card;
      return stateCard;
    }
    case ACTIONS.REJECT:
      return null;
    default:
      return state;
  }
};
