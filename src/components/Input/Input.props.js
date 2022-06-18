import { addPerson } from '../../ducks/person';

export const mapStateToProps = (state) => ({});
export const mapDispatchToProps = (dispatch) => ({
  addPerson: (data) => dispatch(addPerson(data)),
});
