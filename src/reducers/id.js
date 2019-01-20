const initialState = 1;

const id = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      return state + 1;
    default:
      return state;
  }
};

export default id;
