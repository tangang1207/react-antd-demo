import { Button, Modal, Form, Input, Radio } from 'antd';
import React, { Component } from 'react';

import '../../style/layout.less';
const FormItem = Form.Item;

class CollectionCreateForm extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Create a new collection"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input the title of collection!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="Description">
                        {getFieldDecorator('description')(<Input type="textarea" />)}
                    </FormItem>
                    <FormItem className="collection-create-form_last-form-item">
                        {getFieldDecorator('modifier', {
                            initialValue: 'public',
                        })(
                            <Radio.Group>
                                <Radio value="public">Public</Radio>
                                <Radio value="private">Private</Radio>
                            </Radio.Group>
                        )}
                    </FormItem>
                </Form>
            </Modal>

        );
    }

}
export default Form.create()(CollectionCreateForm);