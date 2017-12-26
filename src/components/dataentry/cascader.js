/**
 * Created by tangang on 2017/12/26.
 */
import { Cascader } from 'antd';
import React, { Component } from 'react';
import '../../style/layout.less'

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}

class MyCascader extends React.Component{
    render(){

        const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
            const option = selectedOptions[i];
            if (i === labels.length - 1) {
                return (
                    <span key={option.value}>
        {label} (<a onClick={e => handleAreaClick(e, label, option)}>{option.code}</a>)
      </span>
                );
            }
            return <span key={option.value}>{label} / </span>;
        });
        return (
        <Cascader options={options} size="small" expandTrigger="hover"   onChange={onChange} placeholder="Please select" />

        );
    }
}

export default MyCascader;