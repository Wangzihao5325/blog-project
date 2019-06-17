import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import asyncImport from './asyncComponent';

import ResponsiveHeader from '../component/header/index';

const MainScreen = asyncImport(() => import('../screen/main/index'));
const ShowList = asyncImport(() => import('../screen/show_list/index'));
const AboutMe = asyncImport(() => import('../screen/about_me/index'));

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ResponsiveHeader />
                    <Switch>
                        <Route path='/' exact component={MainScreen} />
                        <Route path='/show_list/' exact component={ShowList} />
                        <Route path='/about_me/' exact component={AboutMe} />
                    </Switch>
                </div>
            </Router>
        );
    }
}