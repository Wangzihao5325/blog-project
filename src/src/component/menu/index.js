import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import store from '../../store/index';
import { menu_select } from '../../store/actions/menuActions';
import Variables from '../../global/Variables';

const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);

class HeaderMenu extends Component {

    handleClick = e => {
        store.dispatch(menu_select(e.key));
        this.props.history.push(`${Variables.menuKeyMapToRouter[e.key]}`);
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.props.selectKey]}
                mode='horizontal'
                theme='dark'
            >
                <Menu.Item key={KEY_ARR[0]}>
                    <Icon type="book" />
                    Blog
                </Menu.Item>
                <Menu.Item key={KEY_ARR[1]}>
                    <Icon type="codepen-circle" />
                    Demo
                </Menu.Item>
                <Menu.Item key={KEY_ARR[2]}>
                    <Icon type="user" />
                    About me
                </Menu.Item>
            </Menu>
        );
    }
}

function mapState2Props(store) {
    return {
        selectKey: store.menu.selectKey
    }
}

const HeaderMenuWithRouter = withRouter(connect(mapState2Props)(HeaderMenu));
export default HeaderMenuWithRouter;