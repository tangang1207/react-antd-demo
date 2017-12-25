/**
 * Created by tangang on 2017/12/25.
 */
import { Row, Col } from 'antd';
import React, { Component } from 'react';
import '../../../node_modules/antd/dist/antd.less';
import '../../style/layout.less'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content } = Layout;



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

            <Layout className="layout">
                <Header>
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
                <Content style={{ padding: '0 50px',textAlign: 'start' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280,textAlign: 'start'  }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2016 Created by Ant UED</Footer>
            </Layout>

        </div>);
    }
}
export default MyLayout;