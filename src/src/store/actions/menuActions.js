import * as Types from '../actionTypes';

export function menu_select(key) {
    return { key, type: Types.MENU_SELECT };
}

export function open_mobile_select() {
    return { type: Types.OPEN_MOBILE_SELECT }
}

export function close_mobile_select() {
    return { type: Types.CLOSE_MOBILE_SELECT }
}