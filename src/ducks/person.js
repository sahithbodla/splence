const initialState = [
  {
    name: 'Sahith',
    expense: 20,
  },
];

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.data];
    default:
      return state;
  }
};

export default personsReducer;

export const addPerson = (data) => ({
  type: 'ADD_PERSON',
  data,
});
