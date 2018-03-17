import Attribute from '../structs/Attribute';
import { SET_BASE_ATTRS, SET_CHAR_INFO } from "../constants/action-types";


const initialState = {
  charInfo: {
    // Character Info
    realName: "",
    streetName: "",
    metatype: "",
    gender: "",
    age: 0,
    height: "",
    weight: "",
    streetCred: 0,
    notoriety: 0,
    publicAwareness: 0,
    karmaCurrent: 0,
    karmaTotal: 0,
  },
  lifestyle: {
    // Lifestyle
    lifestyle: "",
    lifestyleLocation: "",
    monthsPaid: 0,
    cost: "",
  },
  // Attributes
  attributes: {
    STR: new Attribute("STR"),
    AGI: new Attribute("AGI"),
    REA: new Attribute("REA"),
    BOD: new Attribute("BOD"),
    WIS: new Attribute("WIS"),
    INT: new Attribute("INT"),
    LOG: new Attribute("LOG"),
    CHA: new Attribute("CHA"),
    EDG: new Attribute("EDG"),
    ESS: new Attribute("ESS"),
    MAG: new Attribute("MAG"),
    RES: new Attribute("RES"),
    PP:  new Attribute("PP"),
  },
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_BASE_ATTRS:
      return {
        ...state,
        attributes: {
          ...state.attributes,
          ...action.payload
        }
      };
    case SET_CHAR_INFO:
      return {
        ...state,
        charInfo: {
          ...state.charInfo,
          ...action.payload
        }
      }
    default:
      return state;
  }
};


export default rootReducer;
