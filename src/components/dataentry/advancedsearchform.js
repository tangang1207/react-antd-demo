import { Form, Row, Col, Input, Button, Icon } from 'antd';
import React, { Component } from 'react';

import '../../style/layout.less';
const FormItem = Form.Item;

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };


    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 10; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <FormItem label={`Field ${i}`}>
                        {getFieldDecorator(`field-${i}`)(
                            <Input placeholder="placeholder" />
                        )}
                    </FormItem>
                </Col>
            );
        }
        return children;
    }
    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    }
    handleReset = () => {
        this.props.form.resetFields();
    }

    render(){
        return (
            <div>
                <Form onSubmit={this.handleSearch} className="ant-advanced-search-form">
                    <Row gutter={24}>{this.getFields()}</Row>

                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">Search</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                Clear
                            </Button>
                            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                Collapse <Icon type={this.state.expand ? 'up' : 'down'} />
                            </a>
                        </Col>
                    </Row>
    
                </Form>
                <div className="search-result-list">Search Result List</div>
            </div>
        );
    }

}

export default Form.create()(AdvancedSearchForm);