import React, { Component } from 'react';
import { Layout, Col, Row, Icon, Avatar } from 'antd';
import './index.css';
import store from '../../store/index';
import { open_mobile_select } from '../../store/actions/menuActions';
import Variables from '../../global/Variables';
import HeaderMenu from '../menu/index';
const { Header } = Layout;

export default class ResponsiveHeader extends Component {
    render() {
        return (
            <Header>
                <Row>
                    {/*xs-header */}
                    <Col xs={8} sm={0}>
                        <div className='header-item'>{`${Variables.personInfo.name}`}</div>
                    </Col>
                    <Col xs={8} sm={0}>
                        <div className='header-item jus-content-center'>
                            <Avatar size="large" icon="user" />
                        </div>
                    </Col>
                    <Col xs={8} sm={0}>
                        <div onClick={this.mobile_more} className='header-item jus-content-right'>
                            <Icon style={{ fontSize: 22 }} type="appstore-o" />
                        </div>
                    </Col>
                    {/*sm-header */}
                    <Col xs={0} sm={16}>
                        <div className='header-item'>
                            <HeaderMenu />
                        </div>
                    </Col>
                    <Col xs={0} sm={8}>
                        <div className='header-item jus-content-right' style={{ padding: 12 }}>
                            <div style={{ marginRight: 12 }}>{`${Variables.personInfo.name}`}</div>
                            <Avatar size="large" icon="user" />
                        </div>
                    </Col>
                </Row>
            </Header>
        );
    }

    mobile_more = () => {
        store.dispatch(open_mobile_select());
    }
}