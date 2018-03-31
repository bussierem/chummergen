import Attribute from '../structs/Attribute';
import {
  SET_BASE_ATTRS,
  SET_CHAR_INFO,
  SET_LIFESTYLE,
  SET_SKILLS,
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
    lifestyle: "",
    lifestyleLocation: "",
    monthsPaid: 0,
    cost: "",
  },
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
  skills: [
    {
      name: "",
      description: "",
      rating: 0,
      count: 0,
      price: 0,
      specializations: []
    }
  ],
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
  spells: [
    {
      name: "",
      type: "",
      target: "",
      range: "",
      duration: "",
      drain: "",
      notes: ""
    }
  ],
  spirits: [
    {
      type: "",
      bound: false,
      skills: [],
      powers: [],
      optionalPowers: [],
      str: "",
      agi: "",
      rea: "",
      bod: "",
      wil: "",
      int: "",
      log: "",
      cha: "",
      edg: "",
      ess: "",
      mag: "",
      physicalInit: "",
      astralInit: ""
    }
  ],
  powers: [
    {
      name: "",
      cost: 0.0,
      rating: 0,
      description: ""
    }
  ],
  persona: {
    rating: 0,
    attack: 0,
    sleaze: 0,
    dataProcessing: 0,
    firewall: 0,
    submersion: 0,
    echoes: []
  },
  complexForms: [
    {
      name: "",
      target: "",
      duration: "",
      fade: "",
      description: ""
    }
  ],
  sprites: [
    {
      type: "",
      registered: false,
      attack: 0,
      sleaze: 0,
      dataProcessing: 0,
      firewall: 0,
      init: "",
      res: 0,
      skills: [],
      powers: []
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
  warez: [
    {
      name: "",
      rating: 0,
      essence: 0.0,
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
    case SET_SKILLS:
      return {
        ...state,
        skills: action.payload
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
    case SET_SPELLS:
      return {
        ...state,
        spells: action.payload
      }
    case SET_SPIRITS:
      return {
        ...state,
        spirits: action.payload
      }
    case SET_POWERS:
      return {
        ...state,
        powers: action.payload
      }
    case SET_PERSONA:
      return {
        ...state,
        persona: {
          ...state.persona,
          ...action.payload
        }
      }
    case SET_COMPLEX_FORMS:
      return {
        ...state,
        complexForms: action.payload
      }
    case SET_SPRITES:
      return {
        ...state,
        sprites: action.sprites
      }
    case SET_QUALITIES:
      return {
        ...state,
        qualities: action.payload
      }
    case SET_WAREZ:
      return {
        ...state,
        warez: action.payload
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
