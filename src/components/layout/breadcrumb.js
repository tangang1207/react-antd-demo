/**
 * Created by tangang on 2017/12/25.
 */
import React, { Component } from 'react';
import { Router, Route} from 'react-router';
import { Link   } from 'react-router-dom';
import { Breadcrumb, Alert } from 'antd';
import '../../style/layout.less';



class BreadCrumbRouter extends React.Component {
    render(){
        const Apps = () => (
            <ul className="app-list">
                <li>
                    <Link to="/apps/1">Application1</Link>：<Link to="/apps/1/detail">Detail</Link>
                </li>
                <li>
                    <Link to="/apps/2">Application2</Link>：<Link to="/apps/2/detail">Detail</Link>
                </li>
            </ul>
        );

        const Home = ({ routes, params, children }) => (
            <div className="demo">
                <div className="demo-nav">
                    <Link to="/">Home</Link>
                    <Link to="/apps">Application List</Link>
                </div>
                {children || 'Home Page'}
                <Breadcrumb routes={routes} params={params} />
            </div>
        );

        return (
            <Router >
                <Route name="home" breadcrumbName="Home" path="/" component={Home}>
                    <Route name="apps" breadcrumbName="Application List" path="apps" component={Apps}>
                        <Route name="app" breadcrumbName="Application:id" path=":id">
                            <Route name="detail" breadcrumbName="Detail" path="detail" />
                        </Route>
                    </Route>
                </Route>
            </Router>
        );
    }

}
export default BreadCrumbRouter;

