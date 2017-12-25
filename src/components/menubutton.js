/**
 * Created by tangang on 2017/12/25.
 */
import { Button,Menu, Dropdown, Icon } from 'antd';
import React, { Component } from 'react';

class MenuButton extends React.Component{
    constructor(props){
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);

    }
    handleMenuClick(e){
        console.log('click',e);
    }


    render(){
        const  menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">1st item</Menu.Item>
                <Menu.Item key="2">2nd item</Menu.Item>
                <Menu.Item key="3">3rd item</Menu.Item>
            </Menu>
        );
        return(
        <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
            <Button type="primary" style={{margin:10}} ghost>primary</Button>
            <Button style={{margin:10}} ghost>secondary</Button>

            <Dropdown overlay={menu} style={{margin:10}}>
                <Button>
                    Actions <Icon type="down" />
                </Button>
            </Dropdown>

        </div>
        );
    }
}

export default MenuButton;
