import { compose } from 'redux';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './ExpenseForm.props';
import ExpenseForm from './ExpenseForm';

const hocChain = compose(connect(mapStateToProps, mapDispatchToProps));

export default hocChain(ExpenseForm);
