/**
 * Created by tangang on 2017/12/26.
 */
import { DatePicker  } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';
import '../../style/layout.less'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class MyDataPicker extends React.Component {
    onChange(date,dateString){
        console.log(date, dateString);
    }

    render(){
        const dateFormat = 'YYYY/MM/DD';
        const monthFormat = 'YYYY/MM';
        return (
            <div>
                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" onChange={this.onChange} defaultValue={moment('2015/01/01', dateFormat)}/>
                <br />
                <MonthPicker onChange={this.onChange} placeholder="Select month" defaultValue={moment('2015/01', monthFormat)} format={monthFormat}/>
                <br />
                <RangePicker onChange={this.onChange} />
                <br />
                <WeekPicker onChange={this.onChange} placeholder="Select week" />
            </div>
        );
    }
}

export default MyDataPicker;