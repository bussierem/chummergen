const SPRITES = {
  "Courier": {
    "Type": "Courier",
    "Skills": ["Computer", "Hacking"],
    "Powers": ["Cookie", "Hash"],
    "Attack": "L",
    "Sleaze": "L+3",
    "Data Processing": "L+1",
    "Firewall": "L+2",
    "Init": "(Lx2)+1+4d6",
    "RES": "L"
  },
  "Crack": {
    "Type": "Crack",
    "Skills": ["Computer", "Electronic Warfare", "Hacking"],
    "Powers": ["Suppression"],
    "Attack": "L",
    "Sleaze": "L+3",
    "Data Processing": "L+2",
    "Firewall": "L+1",
    "Init": "(Lx2)+2+4d6",
    "RES": "L"
  },
  "Data": {
    "Type": "Data",
    "Skills": ["Computer", "Electronic Warfare"],
    "Powers": ["Camouflage", "Watermark"],
    "Attack": "L-1",
    "Sleaze": "L",
    "Data Processing": "L+4",
    "Firewall": "L+1",
    "Init": "(Lx2)+4+4d6",
    "RES": "L"
  },
  "Fault": {
    "Type": "Fault",
    "Skills": ["Computer", "Cybercombat", "Hacking"],
    "Powers": ["Electron Storm"],
    "Attack": "L+3",
    "Sleaze": "L",
    "Data Processing": "L+1",
    "Firewall": "L+2",
    "Init": "(Lx2)+1+4d6",
    "RES": "L"
  },
  "Machine": {
    "Type": "Machine",
    "Skills": ["Computer", "Electronic Warfare", "Hardware"],
    "Powers": ["Diagnostics", "Gremlins", "Stability"],
    "Attack": "L+1",
    "Sleaze": "L",
    "Data Processing": "L+3",
    "Firewall": "L+2",
    "Init": "(Lx2)+3+4d6",
    "RES": "L"
  }
}

export default SPRITES;
