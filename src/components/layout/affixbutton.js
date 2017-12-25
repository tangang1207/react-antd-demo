/**
 * Created by tangang on 2017/12/25.
 */
import React, { Component } from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';
import { Affix, Button } from 'antd';



class AffixButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Affix>
                    <Button type="primary">Affix top</Button>
                </Affix>
                <br />
                <Affix offsetBottom={0}>
                    <Button type="primary">Affix bottom</Button>
                </Affix>
            </div>
        );
    }
}


export default AffixButton;