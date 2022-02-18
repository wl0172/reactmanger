import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import logo from '../../assets/logo.jpg';
import axios from 'axios'
import router from 'umi/router'
import { connect } from 'dva'
import './index.less';


class Login extends React.Component {
  state = {
    loading: false,
  };

  hanldeSubmit = e => {
    // 1、阻止表单的默认行为
    e.preventDefault();

    // 2、手动校验表单
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 校验通过
        console.log(values);

        // 在发送请求值去先做转圈登入的状态
        this.setState({
          loading: false,
        });
        // 发送请求
        this.props.handleLogin(values, () => {
          // 发送请求完成
          this.setState({
            loading: false,
          });

          // 登陆成功，跳转到首页
          router.replace('/');
        });

      }
    });
  };

  // handleLogin = values => {
  //   axios.post('http://will.natapp4.cc/api/v1/signin', values).then(response => {
  //     let result = response.data;
  //     console.log(result);
  //   });
  // }

  render() {
    let { getFieldDecorator } = this.props.form;
    return (
      <div className="page-login">
        <div className="wrap">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="slogon">
            <h2>CIA-MANAGEMENT</h2>
            <p>专业化的黑客信息管理</p>
          </div>

          <Form className="form" onSubmit={this.hanldeSubmit}>
          <Form.Item>
              {
                getFieldDecorator ('email', {
                  rules: [
                    { required: true, message: '请输入邮箱'},
                    { type: 'email', message: '请输入正确的邮箱格式' }
                  ],
                })(
                  <Input
                size="large"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
                )
              }
          </Form.Item>

          <Form.Item>
            {
              getFieldDecorator ('password', {
                rules: [
                  { required: true, message: '请输入正确的密码!' },
                  { min: 6, max: 15, message: '密码最少为6位'}
                ],
              })(
                <Input
                type="password"
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="PASSWORD"
              />
              )
            }
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large" block htmlType="submit" loading={this.state.loading}>
              登&nbsp;&nbsp;录
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    );
  }
};

export default connect(
  null,
  dispatch => ({
    handleLogin(values,callback) {
      axios.post('http://will.natapp4.cc/api/v1/signin', values).then(response => {
        let result = response.data;

        // 存储账户数据
        window.localStorage.setItem('userInfo',JSON.stringify(result.user));
        window.localStorage.setItem('jwt',JSON.stringify(result.jwt));

        dispatch({
          type: 'global/login',
          userInfo: result.user,
          jwt: result.jwt,
        });
        callback && callback()
      });
    },
  }),
) (Form.create()(Login));