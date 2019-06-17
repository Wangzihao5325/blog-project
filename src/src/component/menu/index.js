import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

class HeaderMenu extends Component {

    state = {
        current: 'blog'
    }

    handleClick = e => {
        this.setState({
            current: e.key
        }, () => {
            switch (this.state.current) {
                case 'blog':
                    this.props.history.push('/');
                    break;
                case 'show-list':
                    this.props.history.push('/show_list/');
                    break;
                case 'about-me':
                    this.props.history.push('/about_me/');
                    break;
            }
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

const HeaderMenuWithRouter = withRouter(HeaderMenu);
export default HeaderMenuWithRouter;