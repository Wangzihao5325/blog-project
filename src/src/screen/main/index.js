import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.css';

import ResponsiveHeader from '../../component/header/index';

export default class MainScreen extends Component {
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <ResponsiveHeader />
            </div>
        );
    }
}