import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

import ButtonSize from './components/buttonsize';

import LoadButton from './components/loadbutton';

import MenuButton from './components/menubutton';
import MyLayout from './components/layout/layout';
import MyLayout2 from './components/layout/layout2';
import Navigation from './components/layout/affixbutton';

class App extends Component {
    render() {
        return (
            <div className="App">
{/*                <Button type="primary">Button</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>

                <br />
                <Button type="primary" shape="circle" icon="search"/>
                <Button type="primary" icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />

                <Button type="dashed" icon="search" >Search</Button>

                <br />
                <ButtonSize />

                <br />
                <span> 加载按钮</span>
                <br />

                <LoadButton />
                <br />
                <span> 菜单按钮</span>
                <br />
                <MenuButton />

                <span>布局</span>
                <MyLayout/>*/}

{/*
                <Navigation />
*/}
                <MyLayout2 />








            </div>
        );
    }
}

export default App;
