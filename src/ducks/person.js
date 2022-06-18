const personsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PERSON': {
      return {
        ...state,
        [action.data.slNo]: {
          name: action.data.name,
          expense: action.data.expense,
        },
      };
    }
    default:
      return state;
  }
};

export default personsReducer;

export const addPerson = (data) => ({
  type: 'ADD_PERSON',
  data,
});
