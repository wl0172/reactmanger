import { Layout, Menu } from 'antd'
import Link from 'umi/link'

const { Header, Content } = Layout

const BasicLayout = props => {
  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="/">Welcome</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/manage/post">文章管理</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/manage/student">学生管理</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/manage/aa">学生管理</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  );
};

// 简单布局
const SimpleLayout = props => {
  return <div>{props.children}</div>;
}

export default props => {
  let simpleRoute = ['/login','/register'];

  if (simpleRoute.indexOf(props.location.pathname) > -1) {
    return <SimpleLayout {...props}></SimpleLayout>;
  } else {
    return <BasicLayout {...props}></BasicLayout>
  }
};

// import { Layout, Menu, Breadcrumb } from 'antd';

// const { Header, Content, Footer } = Layout;

// ReactDOM.render(
//   <Layout className="layout">
//     <Header>
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={['2']}
//         style={{ lineHeight: '64px' }}
//       >
//         <Menu.Item key="1">nav 1</Menu.Item>
//         <Menu.Item key="2">nav 2</Menu.Item>
//         <Menu.Item key="3">nav 3</Menu.Item>
//       </Menu>
//     </Header>
//     <Content style={{ padding: '0 50px' }}>
//       <Breadcrumb style={{ margin: '16px 0' }}>
//         <Breadcrumb.Item>Home</Breadcrumb.Item>
//         <Breadcrumb.Item>List</Breadcrumb.Item>
//         <Breadcrumb.Item>App</Breadcrumb.Item>
//       </Breadcrumb>
//       <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
//     </Content>
//     <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
//   </Layout>,
//   mountNode,
// );
