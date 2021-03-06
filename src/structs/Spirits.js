const SPIRITS = {
  "Air": {
    "Type": "Air",
    "Skills": ["Assensing", "Astral Combat", "Exotic Ranged Weapon", "Perception", "Running", "Unarmed Combat"],
    "Powers": ["Accident", "Astral Form", "Concealment", "Confusion", "Engulf", "Materialization", "Movement", "Sapience", "Search"],
    "Optional Powers": ["Elemental Attack", "Energy Aura", "Fear", "Guard", "Noxious Breath", "Psychokinesis"],
    "BOD": "F-2",
    "AGI": "F+3",
    "REA": "F+4",
    "STR": "F-3",
    "WIL": "F",
    "LOG": "F",
    "INT": "F",
    "CHA": "F",
    "EDG": "F/2",
    "ESS": "F",
    "MAG": "F",
    "Init (Phys)": "(F*2)+4+3d6",
    "Init (Ast)": "(F*2)+3d6"
  },
  "Beast": {
    "Type": "Beast",
    "Skills": ["Assensing", "Astral Combat", "Perception", "Unarmed Combat"],
    "Powers": ["Animal Control", "Astral Form", "Enhanced Senses (Hearing", "Low-Light Vision", "Smell)", "Fear", "Materialization", "Movement", "Sapience"],
    "Optional Powers": ["Concealment", "Confusion", "Guard", "Natural Weapon (Drain Value = Force Physical damage", "AP —)", "Noxious Breath", "Search", "Venom"],
    "BOD": "F+2",
    "AGI": "F+1",
    "REA": "F",
    "STR": "F+2",
    "WIL": "F",
    "LOG": "F",
    "INT": "F",
    "CHA": "F",
    "EDG": "F/2",
    "ESS": "F",
    "MAG": "F",
    "Init (Phys)": "(F*2)+2d6",
    "Init (Ast)": "(F*2)+3d6"
  },
  "Earth": {
    "Type": "Earth",
    "Skills": ["Assensing", "Astral Combat", "Exotic Ranged Weapon", "Perception", "Unarmed Combat"],
    "Powers": ["Astral Form", "Binding", "Guard", "Materialization", "Movement", "Sapience", "Search"],
    "Optional Powers": ["Concealment", "Confusion", "Engulf", "Elemental Attack", "Fear"],
    "BOD": "F+4",
    "AGI": "F-2",
    "REA": "F-1",
    "STR": "F+4",
    "WIL": "F",
    "LOG": "F-1",
    "INT": "F",
    "CHA": "F",
    "EDG": "F/2",
    "ESS": "F",
    "MAG": "F",
    "Init (Phys)": "((F*2)-1)+2d6",
    "Init (Ast)": "(F*2)+3d6"
  },
  "Fire": {
    "Type": "Fire",
    "Skills": ["Assensing", "Astral Combat", "Exotic Ranged Weapon", "Flight", "Perception", "Unarmed Combat"],
    "Powers": ["Accident", "Astral Form", "Confusion", "Elemental Attack", "Energy Aura", "Engulf", "Materialization", "Sapience"],
    "Optional Powers": ["Fear", "Guard", "Noxious Breath", "Search"],
    "BOD": "F+1",
    "AGI": "F+2",
    "REA": "F+3",
    "STR": "F-2",
    "WIL": "F",
    "LOG": "F",
    "INT": "F+1",
    "CHA": "F",
    "EDG": "F/2",
    "ESS": "F",
    "MAG": "F",
    "Init (Phys)": "((F*2)+3)+2d6",
    "Init (Ast)": "(F*2)+3d6"
  },
  "Man": {
    "Type": "Man",
    "Skills": ["Assensing", "Astral Combat", "Perception", "Spellcasting", "Unarmed Combat"],
    "Powers": ["Accident", "Astral Form", "Concealment", "Confusion", "Enhanced Senses (Low-Light", "Thermographic Vision)", "Guard", "Influence", "Materialization", "Sapience", "Search"],
    "Optional Powers": ["Fear", "Innate Spell (any one spell known by the summoner; Force is limited to spirit’s Magic)", "Movement", "Psychokinesis"],
    "BOD": "F+1",
    "AGI": "F",
    "REA": "F+2",
    "STR": "F-2",
    "WIL": "F",
    "LOG": "F",
    "INT": "F+1",
    "CHA": "F",
    "EDG": "F/2",
    "ESS": "F",
    "MAG": "F",
    "Init (Phys)": "((F*2)+2)+2d6",
    "Init (Ast)": "(F*2)+3d6"
  },
  "Water": {
    "Type": "Water",
    "Skills": ["Assensing", "Astral Combat", "Exotic Ranged Weapon", "Perception", "Unarmed Combat"],
    "Powers": ["Astral Form", "Concealment", "Confusion", "Engulf", "Materialization", "Movement", "Sapience", "Search"],
    "Optional Powers": ["Accident", "Binding", "Elemental Attack", "Energy Aura", "Guard", "Weather Control"],
    "BOD": "F",
    "AGI": "F+1",
    "REA": "F+2",
    "STR": "F",
    "WIL": "F",
    "LOG": "F",
    "INT": "F",
    "CHA": "F",
    "EDG": "F/2",
    "ESS": "F",
    "MAG": "F",
    "Init (Phys)": "((F*2)+2)+2d6",
    "Init (Ast)": "(F*2)+3d6"
  }
}

export default SPIRITS;
