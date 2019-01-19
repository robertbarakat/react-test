const initialState = [{
  id: 1, name: 'Robert', lastname: 'Barakat', email: 'rob@robert.it', password: 'pswd',
}];

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      return [...state, action.obj];
    default:
      return state;
  }
};

export default users;
