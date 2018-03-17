import { SET_BASE_ATTRS, SET_CHAR_INFO } from "../constants/action-types";

export const setBaseAttrs = baseAttributes => ({ type: SET_BASE_ATTRS, payload: baseAttributes });
export const setCharInfo = charInfo => ({ type: SET_CHAR_INFO, payload: charInfo });
