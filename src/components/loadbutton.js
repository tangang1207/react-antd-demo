/**
 * Created by tangang on 2017/12/25.
 */
import { Button, Radio, Icon } from 'antd';
import React, { Component } from 'react';

class LoadButton extends React.Component {

    constructor(props){
        super(props);
        this.enterLoading = this.enterLoading.bind(this);
        this.enterIconLoading = this.enterIconLoading.bind(this);
    }
    state ={
        loading:false,
        iconLoading:false,
    }

    enterLoading(){
        this.setState({loading:true});
    }

    enterIconLoading(){
        this.setState({iconLoading:true});
    }
    render(){
        return(<span>
            <Button type="primary" size="small" loading>
                Loading
            </Button>
            <br />

            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                Click me
            </Button>

            <Button type="primary" shape="circle" loading />
            <Button shape="circle" loading />




        </span>);
    }




}

export default LoadButton;

