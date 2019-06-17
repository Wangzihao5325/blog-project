import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import { menu_select } from '../../store/actions/menuActions';
import Variables from '../../global/Variables';
const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);

class MainScreen extends Component {
    componentDidMount() {
        if (this.props.selectKey !== KEY_ARR[0]) {
            store.dispatch(menu_select(KEY_ARR[0]));
        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                main
            </div>
        );
    }
}

function mapState2Props(store) {
    return {
        selectKey: store.menu.selectKey
    }
}

const MainScreenWithStore = connect(mapState2Props)(MainScreen);
export default MainScreenWithStore;