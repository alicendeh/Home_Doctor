export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "CHANGE_THEME":
      console.log("asss", action.payload);
      return {
        ...state,
        theme: action.payload,
      };
  }
};
