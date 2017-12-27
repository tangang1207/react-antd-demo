/**
 * Created by tangang on 2017/12/27.
 */

import { Table, Icon, Divider } from 'antd';
import React, { Component } from 'react';
import reqwest from 'reqwest';


const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
};

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];

class MyTable extends React.Component {

    state = {
        data: [],
        pagination: {},
        loading: false,
    };
    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }
    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                ...params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    }


    componentDidMount() {
        this.fetch();
    }

    render(){
        return(
            <Table columns={columns}
                   bordered
                   rowKey={record => record.registered}
                   dataSource={this.state.data}
                   pagination={this.state.pagination}
                   loading={this.state.loading}
                   onChange={this.handleTableChange}
            />
        );

    }
}
export default MyTable;
