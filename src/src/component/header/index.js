import React, { Component } from 'react';
import { Col, Row, Icon, Avatar } from 'antd';
import './index.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={8}>
                        <div className='header-item'>Zihao Wong</div>
                    </Col>
                    <Col xs={8}>
                        <div className='header-item jus-content-center'>
                            <Avatar size="large" icon="user" />
                        </div>
                    </Col>
                    <Col xs={8}>
                        <div className='header-item jus-content-right'>
                            <Icon style={{ fontSize: 22 }} type="appstore-o" />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}