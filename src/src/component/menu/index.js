import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Variables from '../../global/Variables';

const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);

class HeaderMenu extends Component {

    state = {
        current: KEY_ARR[0]
    }

    handleClick = e => {
        this.setState({
            current: e.key
        }, () => {
            const { current } = this.state;
            this.props.history.push(`${Variables.menuKeyMapToRouter[current]}`);
        });
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
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

const HeaderMenuWithRouter = withRouter(HeaderMenu);
export default HeaderMenuWithRouter;