import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

import ButtonSize from './components/buttonsize';

import LoadButton from './components/loadbutton';

import MenuButton from './components/menubutton';
import MyLayout from './components/layout/layout';
import MyLayout2 from './components/layout/layout2';
import Navigation from './components/layout/affixbutton';

import MyAutoComplete from './components/dataentry/autocomplete';

import MyPagination from './components/layout/pagination';

import MySteps from './components/layout/step';

import MyCascader from './components/dataentry/cascader';

import MyDataPicker from './components/dataentry/data_picker';

import HorizontalLoginForm from './components/dataentry/form';

import NormailLoginForm from './components/dataentry/normalloginform';

import RegisterForm from './components/dataentry/registerform';

import AdvancedSearchForm from './components/dataentry/advancedsearchform';

import CollectionPage from './components/dataentry/collectionpage';
import MyInput from './components/dataentry/input';

import MySlider from './components/dataentry/slider';

import MySelect from './components/dataentry/select';

import MyTable from './components/dataentry/table';

class App extends Component {
    render() {
        return (
            <div className="App">
              {/*  <Button type="primary">Button</Button>
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
                <MyLayout/>


                <Navigation />

                <MyLayout2 />

                 <MyPagination/>

                <MySteps/>

                <MyAutoComplete />
                <MyCascader />


                <br />

                <MyDataPicker />

                <HorizontalLoginForm />

                <NormailLoginForm />

                <RegisterForm/>

                <AdvancedSearchForm />

                <CollectionPage/>

                <MyInput />

                <MySlider />

                <MySelect />*/}

                <MyTable />



            </div>
        );
    }
}

export default App;
