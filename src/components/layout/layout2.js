/**
 * Created by tangang on 2017/12/25.
 */
import { Layout, Menu, Breadcrumb, Icon, Switch  } from 'antd';
import '../../style/layout.less';
import React, { Component } from 'react';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Layout2 extends React.Component{
    constructor(props) {
        super(props);
        this.onCollapse = this.onCollapse.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
    }

    state = {
        collapsed: false,
        current: 'mail',
        theme: 'dark',
    };

    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }

    onCollapse(collapsed){
        console.log(collapsed);
        this.setState({ collapsed: !this.state.collapsed });
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render(){
        return(
            <Layout  style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    /*onCollapse={this.onCollapse}*/
                    trigger={null}
                    style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
                >
                    <Switch
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                    <br />
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="user" /><span>User</span></span>}
                    >
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={<span><Icon type="team" /><span>Team</span></span>}
                    >
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9">
                        <Icon type="file" />
                        <span>File</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.onCollapse}
                        />
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="mail">
                                <Icon type="mail" />Navigation One
                            </Menu.Item>
                        </Menu>

                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat....
                            <br />
                            Really
                            <br />...<br />...<br />...<br />
                            long
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />...
                            <br />...<br />...<br />...<br />...<br />...<br />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }



}

export default Layout2;
