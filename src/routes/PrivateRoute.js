import { connect } from 'dva';
import Redirect from 'umi/redirect';

const PrivateRoute = props => {
  // 判断有没有登录状态
  if (true) {
  // if (props.userInfo) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
};

export default connect(
  state => ({
    userInfo: state.global.userInfo,
  }),
  null,
)(PrivateRoute);
