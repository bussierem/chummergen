import Attribute from '../structs/Attribute';
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
  contacts: [
    {
      name: "",
      connection: 0,
      loyalty: 0,
      notes: ""
    }
  ],
  gear: [
    {
      name: "",
      description: "",
      rating: 0,
      count: 0,
      price: 0
    }
  ],
  qualities: [
    {
      type: "",
      name: "",
      rating: 0,
      notes: ""
    }
  ],
  cyberdeck: {
      name: "",
      rating: 0,
      attack: 0,
      sleaze: 0,
      dataProcessing: 0,
      firewall: 0,
      matrixCondition: 0
  },
  programs: [
    {
      running: false,
      name: "",
      type: "",
      description: ""
    }
  ],
  drones: [
    {
      name: "",
      pilot: 0,
      body: 0,
      armor: 0,
      speed: 0,
      accel: 0,
      handling: 0,
      sensor: 0,
      notes: ""
    }
  ]
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
    case SET_LIFESTYLE:
      return {
        ...state,
        lifestyle: {
          ...state.lifestyle,
          ...action.payload
        }
      }
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      }
    case SET_GEAR:
      return {
        ...state,
        gear: action.payload
      }
    case SET_QUALITIES:
      return {
        ...state,
        qualities: action.payload
      }
    case SET_CYBERDECK:
      return {
        ...state,
        cyberdeck: {
          ...state.cyberdeck,
          ...action.payload
        }
      }
    case SET_PROGRAMS:
      return {
        ...state,
        programs: action.payload
      }
    case SET_DRONES:
      return {
        ...state,
        drones: action.payload
      }
    default:
      return state;
  }
};


export default rootReducer;
