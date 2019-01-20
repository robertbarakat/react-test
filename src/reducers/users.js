const initialState = [];

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      return [...state, action.obj];
    default:
      return state;
  }
};

export default users;
