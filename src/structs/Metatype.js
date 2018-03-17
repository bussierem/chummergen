import Attribute from './Attribute';

const METATYPES = {
  human: {
    STR: new Attribute("STR", 1, 6, 1),
    AGI: new Attribute("AGI", 1, 6, 1),
    REA: new Attribute("REA", 1, 6, 1),
    BOD: new Attribute("BOD", 1, 6, 1),
    WIS: new Attribute("WIS", 1, 6, 1),
    INT: new Attribute("INT", 1, 6, 1),
    LOG: new Attribute("LOG", 1, 6, 1),
    CHA: new Attribute("CHA", 1, 6, 1),
    EDG: new Attribute("EDG", 2, 6, 1),
    ESS: new Attribute("ESS", 6, 6, 6),
    racials: []
  },
  elf: {
    STR: new Attribute("STR", 1, 6, 1),
    AGI: new Attribute("AGI", 2, 7, 1),
    REA: new Attribute("REA", 1, 6, 1),
    BOD: new Attribute("BOD", 1, 6, 1),
    WIS: new Attribute("WIS", 1, 6, 1),
    INT: new Attribute("INT", 1, 6, 1),
    LOG: new Attribute("LOG", 1, 6, 1),
    CHA: new Attribute("CHA", 3, 8, 1),
    EDG: new Attribute("EDG", 1, 6, 1),
    ESS: new Attribute("ESS", 6, 6, 6),
    racials: [
      "Low-Light Vision"
    ]
  },
  dwarf: {
    STR: new Attribute("STR", 3, 8, 1),
    AGI: new Attribute("AGI", 1, 6, 1),
    REA: new Attribute("REA", 1, 5, 1),
    BOD: new Attribute("BOD", 3, 8, 1),
    WIS: new Attribute("WIS", 2, 7, 1),
    INT: new Attribute("INT", 1, 6, 1),
    LOG: new Attribute("LOG", 1, 6, 1),
    CHA: new Attribute("CHA", 1, 6, 1),
    EDG: new Attribute("EDG", 1, 6, 1),
    ESS: new Attribute("ESS", 6, 6, 6),
    racials: [
      "Thermographic Vision",
      "+2 Dice to Resist Toxins/Poisons",
      "+20% Lifestyle Costs"
    ]
  },
  ork: {
    STR: new Attribute("STR", 3, 8, 1),
    AGI: new Attribute("AGI", 1, 6, 1),
    REA: new Attribute("REA", 1, 6, 1),
    BOD: new Attribute("BOD", 4, 9, 1),
    WIS: new Attribute("WIS", 1, 6, 1),
    INT: new Attribute("INT", 1, 6, 1),
    LOG: new Attribute("LOG", 1, 5, 1),
    CHA: new Attribute("CHA", 1, 5, 1),
    EDG: new Attribute("EDG", 1, 6, 1),
    ESS: new Attribute("ESS", 6, 6, 6),
    racials: [
      "Low-Light Vision"
    ]
  },
  troll: {
    STR: new Attribute("STR", 5, 10, 1),
    AGI: new Attribute("AGI", 1, 5, 1),
    REA: new Attribute("REA", 1, 6, 1),
    BOD: new Attribute("BOD", 5, 10, 1),
    WIS: new Attribute("WIS", 1, 6, 1),
    INT: new Attribute("INT", 1, 5, 1),
    LOG: new Attribute("LOG", 1, 5, 1),
    CHA: new Attribute("CHA", 1, 4, 1),
    EDG: new Attribute("EDG", 1, 6, 1),
    ESS: new Attribute("ESS", 6, 6, 6),
    racials: [
      "Thermographic Vision",
      "+1 Reach",
      "+1 Dermal Armor (stacks with normal armor)",
      "+100% Lifestyle Costs"
    ]
  },
}

export default METATYPES;
