import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../../store/index';
import { menu_select } from '../../store/actions/menuActions';
import Variables from '../../global/Variables';
const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);

class ShowList extends Component {
    componentDidMount() {
        if (this.props.selectKey !== KEY_ARR[1]) {
            store.dispatch(menu_select(KEY_ARR[1]));
        }
    }

    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                ShowList
            </div>
        );
    }
}

function mapState2Props(store) {
    return {
        selectKey: store.menu.selectKey
    }
}

const ShowListWithStore = connect(mapState2Props)(ShowList);
export default ShowListWithStore;