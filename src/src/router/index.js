import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Drawer } from 'antd'
import asyncImport from './asyncComponent';
import Variables from '../global/Variables';
import store from '../store/index';
import { close_mobile_select } from '../store/actions/menuActions';
import MobileMenu from '../component/menu/index';
import ResponsiveHeader from '../component/header/index';

const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);
const MainScreen = asyncImport(() => import('../screen/main/index'));
const ShowList = asyncImport(() => import('../screen/show_list/index'));
const AboutMe = asyncImport(() => import('../screen/about_me/index'));

class AppRouter extends Component {
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
                    <Drawer
                        placement='right'
                        closable={false}
                        onClose={this.close_mobile_drawer}
                        visible={this.props.isDrawerShow}
                    >
                        <MobileMenu mode='inline' />
                    </Drawer>
                </div>
            </Router>
        );
    }

    close_mobile_drawer = () => {
        store.dispatch(close_mobile_select());
    }
}

function mapState2Props(store) {
    return {
        isDrawerShow: store.menu.isMobileSelectShow
    }
}

const AppRouterWithStore = connect(mapState2Props)(AppRouter);
export default AppRouterWithStore;