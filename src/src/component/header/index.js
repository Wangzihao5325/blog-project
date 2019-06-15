import React, { Component } from 'react';
import { Layout, Col, Row, Menu, Icon, Avatar } from 'antd';
import './index.css';
const { Header } = Layout;
const { SubMenu } = Menu;

export default class ResponsiveHeader extends Component {
    render() {
        return (
            <Header>
                <Row>
                    {/*xs-header */}
                    <Col xs={8} sm={0}>
                        <div className='header-item'>Zihao Wong</div>
                    </Col>
                    <Col xs={8} sm={0}>
                        <div className='header-item jus-content-center'>
                            <Avatar size="large" icon="user" />
                        </div>
                    </Col>
                    <Col xs={8} sm={0}>
                        <div className='header-item jus-content-right'>
                            <Icon style={{ fontSize: 22 }} type="appstore-o" />
                        </div>
                    </Col>
                    {/*sm-header */}
                    <Col xs={0} sm={20}>
                        <div className='header-item'>

                        </div>
                    </Col>
                    <Col xs={0} sm={4}>
                        <div className='header-item'>
                            4
                        </div>
                    </Col>
                </Row>
            </Header>
        );
    }
}