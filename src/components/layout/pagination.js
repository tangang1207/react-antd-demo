import { Pagination } from 'antd';
import React, { Component } from 'react';

class MyPagination extends React.Component{
    onShowSizeChange(current, pageSize){
        console.log(current, pageSize);

    }
    onPageChange(pageNumber){
        console.log('Page: ', pageNumber);
    }
    render(){
        return (
            <Pagination size="small" showSizeChanger  showQuickJumper onChange={this.onPageChange} onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
        );
    }
}

export default MyPagination;