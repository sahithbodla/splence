import { compose } from 'redux';
import { connect } from 'react-redux';
import { mapStateToProps } from './Result.props';
import Result from './Result';

const hocChain = compose(connect(mapStateToProps, null));

export default hocChain(Result);
