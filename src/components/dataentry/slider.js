/**
 * Created by tangang on 2017/12/27.
 */
import { Slider, Switch,InputNumber, Row, Col } from 'antd';
import React, { Component } from 'react';

class MySlider extends React.Component {
    state = {
        disabled: false,
        inputValue: 1,
    };

    handleDisabledChange = (disabled) => {
        this.setState({ ...this.state,
            disabled:disabled
            });
    }
    onChange = (value) => {
        this.setState({
            ...this.state,
            inputValue: value
        });
    }

    formatter(value){
        return `${value}%`;
    }


    render (){
        const { disabled } = this.state;
        const marks = {
            0: '0°C',
            26: '26°C',
            37: '37°C',
            100: {
                style: {
                    color: '#f50',
                },
                label: <strong>100°C</strong>,
            },
        };
        return (
            <div>
                <Slider defaultValue={30} disabled={disabled} />
                <Slider range defaultValue={[20, 50]} disabled={disabled} />
                Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />

                <Row>
                    <Col span={12}>
                        <Slider marks={marks} tipFormatter={this.formatter} min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            step={0.01}
                            style={{ marginLeft: 16 }}
                            value={this.state.inputValue}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>


            </div>
        );
    }

}
export default MySlider;
