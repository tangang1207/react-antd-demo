/**
 * Created by tangang on 2017/12/25.
 */
import { Row, Col } from 'antd';
import React, { Component } from 'react';
import '../../../node_modules/antd/dist/antd.less';
import '../../style/layout.less'
import { Layout, Menu, Breadcrumb,Icon  } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;



class MyLayout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){

        return(<div>
            <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>col-8</Col>
            </Row>
            <Row>
                <Col span={6} offset={6}>col-6 col-offset-6</Col>
                <Col span={6} offset={6}>col-6 col-offset-6</Col>
            </Row>
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
            </Row>

            <Layout>
                <Header breakpoint="lg" style={{ width: '100%' }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' ,textAlign: 'start'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider breakpoint="lg" width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>

                        </Sider>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>

                    </Layout>

                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2016 Created by Ant UED</Footer>
            </Layout>

        </div>);
    }
}
export default MyLayout;