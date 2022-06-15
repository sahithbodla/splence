import { addNoOfPersons } from '../../ducks/noOfPersons';

export const mapStateToProps = (state) => ({
  number: state.noOfPersons,
});

export const mapDispatchToProps = (dispatch) => ({
  setNumber: (data) => dispatch(addNoOfPersons(data)),
});
