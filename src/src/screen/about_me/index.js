import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import { menu_select } from '../../store/actions/menuActions';
import Variables from '../../global/Variables';
const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);

class AboutMe extends Component {
    componentDidMount() {
        if (this.props.selectKey !== KEY_ARR[2]) {
            store.dispatch(menu_select(KEY_ARR[2]));
        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                AboutMe
            </div>
        );
    }
}

function mapState2Props(store) {
    return {
        selectKey: store.menu.selectKey
    }
}

const AboutMeWithStore = connect(mapState2Props)(AboutMe);
export default AboutMeWithStore;