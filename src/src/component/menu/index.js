import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class HeaderMenu extends Component {

    state = {
        current: 'blog'
    }

    handleClick = e => {
        this.setState({
            current: e.key
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
                <Menu.Item key='blog'>
                    <Icon type="book" />
                    Blog
                </Menu.Item>
                <Menu.Item key='show-list'>
                    <Icon type="codepen-circle" />
                    Demo
                </Menu.Item>
                <Menu.Item key='about-me'>
                    <Icon type="user" />
                    About me
                </Menu.Item>
            </Menu>
        );
    }
}