import * as Types from '../actionTypes';
import Variables from '../../global/Variables';

const KEY_ARR = Object.keys(Variables.menuKeyMapToRouter);
const initialState = {
    selectKey: KEY_ARR[0],
    isMobileSelectShow: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.MENU_SELECT:
            return {
                ...state,
                selectKey: action.key
            };
        case Types.OPEN_MOBILE_SELECT:
            return {
                ...state,
                isMobileSelectShow: true
            };
        case Types.CLOSE_MOBILE_SELECT:
            return {
                ...state,
                isMobileSelectShow: false
            };
        default: return state;
    }
};
export default reducer;