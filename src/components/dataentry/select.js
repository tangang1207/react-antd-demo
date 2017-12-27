/**
 * Created by tangang on 2017/12/27.
 */
import React, { Component } from 'react';
import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const Option = Select.Option;

let timeout;
let currentValue;

function fetch(value, callback) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    function fake() {
        const str = querystring.encode({
            code: 'utf-8',
            q: value,
        });
        jsonp(`https://suggest.taobao.com/sug?${str}`)
            .then(response => response.json())
            .then((d) => {
                if (currentValue === value) {
                    const result = d.result;
                    const data = [];
                    result.forEach((r) => {
                        data.push({
                            value: r[0],
                            text: r[0],
                        });
                    });
                    callback(data);
                }
            });
    }

    timeout = setTimeout(fake, 300);
}


function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}

class MySlider extends React.Component {
    state = {
        data: [],
        value: '',
    }
    handleChange = (value) => {
        this.setState({ value });
        fetch(value, data => this.setState({ data }));
    }

    render(){
        const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
        return (
            <Select
                mode="combobox"
                value={this.state.value}
                placeholder="input search text"
                style={{ width: 200 }}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onChange={this.handleChange}
            >
                {options}
            </Select>);
    }



}

export default MySlider;