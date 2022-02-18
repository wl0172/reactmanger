// dva 操作 redux 的拆分出来的模块文件

// 取值
const userInfo = window.localStorage.getItem('userInfo');
const jwt = window.localStorage.getItem('jwt');

export default {
  state: {
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    jwt: jwt ? JSON.parse(jwt) : null,
  },

  reducers: {
    // 记录上一次state的和这一次的动作
    login(state, action) {
      return { ...state, ...{ userInfo: action.userInfo, jwt: action.jwt } };
    },
  },
};
