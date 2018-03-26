import {
  SET_BASE_ATTRS,
  SET_CHAR_INFO,
  SET_LIFESTYLE,
  SET_CONTACTS,
  SET_GEAR,
  SET_QUALITIES,
  SET_CYBERDECK,
  SET_PROGRAMS,
  SET_DRONES
} from "../constants/action-types";

export const setBaseAttrs = baseAttributes => ({ type: SET_BASE_ATTRS, payload: baseAttributes });
export const setCharInfo = charInfo => ({ type: SET_CHAR_INFO, payload: charInfo });
export const setLifestyle = lifestyle => ({ type: SET_LIFESTYLE, payload: lifestyle });
export const setContacts = contacts => ({ type: SET_CONTACTS, payload: contacts });
export const setGear = gear => ({ type: SET_GEAR, payload: gear });
export const setQualities = qualities => ({ type: SET_QUALITIES, payload: qualities });
export const setCyberdeck = cyberdeck => ({ type: SET_CYBERDECK, payload: cyberdeck });
export const setPrograms = programs => ({ type: SET_PROGRAMS, payload: programs });
export const setDrones = drones => ({ type: SET_DRONES, payload: drones });
