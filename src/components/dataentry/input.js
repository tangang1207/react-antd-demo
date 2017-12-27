/**
 * Created by tangang on 2017/12/27.
 */
import React, { Component } from 'react';
import '../../style/layout.less';
import { Input,Select, Col, Icon, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
const { TextArea } = Input;
class MyInput extends React.Component {
    render(){
        const selectBefore = (
            <Select defaultValue="Http://" style={{ width: 90 }}>
                <Option value="Http://">Http://</Option>
                <Option value="Https://">Https://</Option>
            </Select>
        );
        const selectAfter = (
            <Select defaultValue=".com" style={{ width: 80 }}>
                <Option value=".com">.com</Option>
                <Option value=".jp">.jp</Option>
                <Option value=".cn">.cn</Option>
                <Option value=".org">.org</Option>
            </Select>
        );
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
                </div>

                <InputGroup compact>
                    <Input style={{ width: '20%' }} defaultValue="0571" />
                    <Input style={{ width: '30%' }} defaultValue="26888888" />
                </InputGroup>
                <InputGroup compact>
                    <Select defaultValue="Option1">
                        <Option value="Option1">Option1</Option>
                        <Option value="Option2">Option2</Option>
                    </Select>
                    <Input style={{ width: '50%' }} defaultValue="input content" />
                </InputGroup>
                <br />
                <InputGroup compact>
                    <Select defaultValue="Option1">
                        <Option value="Option1">Option1</Option>
                        <Option value="Option2">Option2</Option>
                    </Select>
                    <Input style={{ width: '50%' }} defaultValue="input content" />
                    <InputNumber />
                </InputGroup>
                <br />
                <TextArea rows={4} />

            </div>
        );
    }
}
export default MyInput;