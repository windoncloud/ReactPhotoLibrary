import React, { Component} from 'react';
import { connect } from 'react-redux';
import MyIndex from '../../components/index/index';
import { bindActionCreators } from 'redux';
import {fetchTheChange} from '../../actions/index/index';
class Index extends Component {

  render() {
      return (
          <MyIndex {...this.props}></MyIndex>
      );
  }
}

  function mapStateToProps(state) {
  let {loginState} = state;
  return {
    loginState:loginState,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTheChange}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);