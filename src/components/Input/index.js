import { compose } from 'redux';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './Input.props';
import Input from './Input';

const hocChain = compose(connect(mapStateToProps, mapDispatchToProps));

export default hocChain(Input);
