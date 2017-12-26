import { Form, Row, Col, Input, Button, Icon } from 'antd';
import React, { Component } from 'react';
import CollectionCreateForm from './collectioncreateform';

import '../../style/layout.less';
const FormItem = Form.Item;

class CollectionPage extends React.Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render(){
        return(
            <div>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

export default CollectionPage;