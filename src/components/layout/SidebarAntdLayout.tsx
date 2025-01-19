import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  {
    key: 'home',
    label: <NavLink to='/'>Home</NavLink>,
  },
  {
    key: 'login',
    label: <NavLink to='/login'>Login</NavLink>,
  },
  {
    key: 'registration',
    label: <NavLink to='/registration'>Registration</NavLink>,
  },
];

export default function SidebarAntdLayout() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: 'white',
            display: 'flex',
            height: '4rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Your System</h1>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Content will go here.. */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Reuseable Component ©{new Date().getFullYear()} Created Yeasin Rafee
        </Footer>
      </Layout>
    </Layout>
  );
}
