import { compose } from 'redux';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './NoOfPersons.props';
import NoOfPersons from './NoOfPersons';

const hocChain = compose(connect(mapStateToProps, mapDispatchToProps));

export default hocChain(NoOfPersons);
