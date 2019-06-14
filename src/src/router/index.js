import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import asyncImport from './asyncComponent';

const MainScreen = asyncImport(() => import('../screen/main/index'))

export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={MainScreen} />
                </Switch>
            </Router>
        );
    }
}