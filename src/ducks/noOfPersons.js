const initialState = '';

const noOfPersonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NUMBER_OF_PERSONS':
      return action.data;
    default:
      return state;
  }
};

export default noOfPersonsReducer;

export const addNoOfPersons = (data) => ({
  type: 'ADD_NUMBER_OF_PERSONS',
  data,
});
