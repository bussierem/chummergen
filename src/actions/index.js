import {
  SET_BASE_ATTRS,
  SET_CHAR_INFO,
  SET_LIFESTYLE,
  SET_CONTACTS,
  SET_GEAR,
  SET_SPELLS,
  SET_SPIRITS,
  SET_POWERS,
  SET_PERSONA,
  SET_COMPLEX_FORMS,
  SET_SPRITES,
  SET_QUALITIES,
  SET_WAREZ,
  SET_CYBERDECK,
  SET_PROGRAMS,
  SET_DRONES
} from "../constants/action-types";

export const setBaseAttrs = baseAttributes => ({ type: SET_BASE_ATTRS, payload: baseAttributes });
export const setCharInfo = charInfo => ({ type: SET_CHAR_INFO, payload: charInfo });
export const setLifestyle = lifestyle => ({ type: SET_LIFESTYLE, payload: lifestyle });
export const setContacts = contacts => ({ type: SET_CONTACTS, payload: contacts });
export const setGear = gear => ({ type: SET_GEAR, payload: gear });
export const setSpells = spells => ({ type: SET_SPELLS, payload: spells });
export const setSpirits = spirits => ({ type: SET_SPIRITS, payload: spirits });
export const setPowers = powers => ({ type: SET_POWERS, payload: powers });
export const setPersona = persona => ({ type: SET_PERSONA, payload: persona });
export const setComplexForms = complexForms => ({ type: SET_COMPLEX_FORMS, payload: complexForms });
export const setSprites = sprites => ({ type: SET_SPRITES, payload: sprites });
export const setQualities = qualities => ({ type: SET_QUALITIES, payload: qualities });
export const setWarez = warez => ({ type: SET_WAREZ, payload: warez });
export const setCyberdeck = cyberdeck => ({ type: SET_CYBERDECK, payload: cyberdeck });
export const setPrograms = programs => ({ type: SET_PROGRAMS, payload: programs });
export const setDrones = drones => ({ type: SET_DRONES, payload: drones });
