import * as Types from '../actionTypes';
import Variables from '../../global/Variables';

const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);
const initialState = {
    selectKey: KEY_ARR[0]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.MENU_SELECT:
            return {
                ...state,
                selectKey: action.key
            };
        default: return state;
    }
};
export default reducer;