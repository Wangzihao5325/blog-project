import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import asyncImport from './asyncComponent';
import Variables from '../global/Variables';

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
                        <Route path={Variables.menuKeyMapToRouter['blog']} exact component={MainScreen} />
                        <Route path={Variables.menuKeyMapToRouter['show-list']} exact component={ShowList} />
                        <Route path={Variables.menuKeyMapToRouter['about-me']} exact component={AboutMe} />
                    </Switch>
                </div>
            </Router>
        );
    }
}