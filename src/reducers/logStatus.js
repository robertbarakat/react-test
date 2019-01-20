const initialState = false;

const logStatus = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOG':
      return action.bool;
    default:
      return state;
  }
};

export default logStatus;
