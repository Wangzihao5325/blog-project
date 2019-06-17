import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import asyncImport from './asyncComponent';
import Variables from '../global/Variables';

import ResponsiveHeader from '../component/header/index';

const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);
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
                        <Route path={Variables.menuKeyMapToRouter[KEY_ARR[0]]} exact component={MainScreen} />
                        <Route path={Variables.menuKeyMapToRouter[KEY_ARR[1]]} exact component={ShowList} />
                        <Route path={Variables.menuKeyMapToRouter[KEY_ARR[2]]} exact component={AboutMe} />
                    </Switch>
                </div>
            </Router>
        );
    }
}