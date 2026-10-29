const fs = require('fs');
const path = require('path');

const partnersDir = path.join(__dirname, '../public/assets/partners');
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
}

function cardSvg(content, width = 360, height = 120) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
  <rect width="${width}" height="${height}" rx="12" fill="#FFFFFF" fill-opacity="0.03"/>
  <rect width="${width - 2}" height="${height - 2}" x="1" y="1" rx="11" fill="none" stroke="#FFFFFF" stroke-opacity="0.08"/>
  <g transform="translate(18, 16)">
    ${content}
  </g>
</svg>`;
}

const partners = {
  // === NBFCs ===
  'incred-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 10)">
      <text x="0" y="42" font-family="'Montserrat', 'Arial Black', sans-serif" font-size="38" font-weight="900" fill="#FF6A00" letter-spacing="-0.5">InCred<tspan fill="#FF6A00">!</tspan></text>
      <text x="2" y="78" font-family="'Plus Jakarta Sans', 'Arial', sans-serif" font-size="34" font-weight="800" font-style="italic" fill="#0B3E82">finance</text>
    </g>
  </svg>`,

  'fibe': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(20, 10)">
      <!-- 3 colored dots -->
      <circle cx="35" cy="18" r="6" fill="#E91E63"/>
      <circle cx="53" cy="28" r="6.5" fill="#00BCD4"/>
      <circle cx="32" cy="38" r="7" fill="#FFA000"/>
      <!-- fibe text -->
      <text x="75" y="65" font-family="'Plus Jakarta Sans', 'Comfortaa', sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" letter-spacing="-1">fibe</text>
    </g>
  </svg>`,

  'piramal-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 12)">
      <!-- Flame emblem -->
      <path d="M 32 68 C 18 68 12 52 14 38 C 16 28 24 16 30 6 C 28 18 36 26 38 32 C 40 22 46 14 54 8 C 50 20 54 28 58 35 C 64 26 70 20 74 14 C 72 26 74 38 68 50 C 60 64 46 68 32 68 Z" fill="#E6391C"/>
      <text x="82" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="32" font-weight="800" fill="#FFFFFF">Piramal</text>
      <text x="83" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="600" fill="#94A3B8" letter-spacing="1">Finance</text>
    </g>
  </svg>`,

  'poonawalla-fincorp': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <!-- Serif P -->
      <text x="8" y="62" font-family="'Playfair Display', 'Times New Roman', serif" font-size="64" font-weight="600" fill="#3B82F6">P</text>
      <line x1="56" y1="12" x2="56" y2="70" stroke="#64748B" stroke-width="2"/>
      <text x="68" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" letter-spacing="1.5">POONAWALLA</text>
      <text x="68" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="800" fill="#38BDF8" letter-spacing="2">FINCORP</text>
    </g>
  </svg>`,

  'kreditbee': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 12)">
      <!-- Bee wing with heart center -->
      <path d="M 32 20 C 44 8 62 14 62 30 C 62 46 44 58 32 64 C 20 58 2 46 2 30 C 2 14 20 8 32 20 Z" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>
      <circle cx="12" cy="14" r="3.5" fill="#FACC15"/>
      <circle cx="22" cy="8" r="4" fill="#FACC15"/>
      <path d="M 32 30 C 38 22 48 26 48 34 C 48 42 38 48 32 52 C 26 48 16 42 16 34 C 16 26 26 22 32 30 Z" fill="#FACC15"/>
      <text x="76" y="52" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#FFFFFF">Kredit<tspan fill="#FACC15">Bee</tspan></text>
    </g>
  </svg>`,


  'lt-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(10, 15)">
      <rect width="290" height="66" rx="8" fill="#FFCC00"/>
      <text x="145" y="46" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Arial Black', sans-serif" font-size="32" font-weight="900" font-style="italic" fill="#000000" letter-spacing="-0.5">L&amp;T Finance</text>
    </g>
  </svg>`,

  'lendingkart': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(10, 14)">
      <text x="6" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#38BDF8" letter-spacing="0.5">LENDINGKA<tspan fill="#F97316">₹</tspan>T</text>
      <text x="8" y="65" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#94A3B8" letter-spacing="0.5">Think Cash, Think Lendingkart Group!</text>
    </g>
  </svg>`,

  'shriram-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="28" cy="36" r="24" fill="#C59B27"/>
      <circle cx="28" cy="36" r="20" fill="#0F172A"/>
      <text x="28" y="44" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#C59B27">S</text>
      <text x="62" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">SHRIRAM</text>
      <text x="64" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#C59B27" letter-spacing="1">FINANCE</text>
    </g>
  </svg>`,

  'tata-capital': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <!-- Tata Blue Ring -->
      <circle cx="30" cy="36" r="24" fill="none" stroke="#0099FF" stroke-width="6"/>
      <path d="M 22 26 L 38 26 M 30 26 L 30 46" stroke="#0099FF" stroke-width="5" stroke-linecap="round"/>
      <text x="68" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="1.5">TATA</text>
      <text x="68" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#0099FF" letter-spacing="2">CAPITAL</text>
    </g>
  </svg>`,

  'bajaj-finserv': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="24" fill="#005B9F"/>
      <path d="M 20 30 L 30 42 L 40 30" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
      <text x="66" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="1">BAJAJ</text>
      <text x="66" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="700" fill="#38BDF8" letter-spacing="1.5">FINSERV</text>
    </g>
  </svg>`,

  'hdb-financial-services': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="10" y="16" width="36" height="36" rx="6" fill="#004C8F"/>
      <rect x="22" y="28" width="24" height="24" rx="4" fill="#ED1C24"/>
      <text x="58" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">HDB</text>
      <text x="58" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#94A3B8">Financial Services</text>
    </g>
  </svg>`,

  'aditya-birla-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 12)">
      <!-- Aditya Birla Sunrise Fan -->
      <path d="M 12 50 C 14 30 32 16 52 16 C 52 35 35 50 12 50 Z" fill="#D92228"/>
      <path d="M 26 50 C 30 35 44 26 52 26 C 52 40 40 50 26 50 Z" fill="#F37021"/>
      <path d="M 38 50 C 42 42 48 36 52 36 C 52 44 46 50 38 50 Z" fill="#FDB813"/>
      <text x="64" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">ADITYA BIRLA</text>
      <text x="64" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#F37021" letter-spacing="1">FINANCE</text>
    </g>
  </svg>`,

  'muthoot-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="24" fill="#C8102E"/>
      <circle cx="30" cy="36" r="16" fill="none" stroke="#FACC15" stroke-width="2.5"/>
      <text x="30" y="42" text-anchor="middle" font-family="serif" font-size="18" font-weight="900" fill="#FACC15">M</text>
      <text x="68" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Muthoot</text>
      <text x="68" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="600" fill="#F87171">Finance</text>
    </g>
  </svg>`,

  'mahindra-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <path d="M 12 48 C 22 20 44 20 54 48" fill="none" stroke="#E31837" stroke-width="6" stroke-linecap="round"/>
      <path d="M 24 48 C 30 32 38 32 44 48" fill="none" stroke="#E31837" stroke-width="4" stroke-linecap="round"/>
      <text x="66" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Mahindra</text>
      <text x="66" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#E31837" letter-spacing="1">FINANCE</text>
    </g>
  </svg>`,

  'chola-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <polygon points="30,12 50,24 50,48 30,60 10,48 10,24" fill="#C8102E"/>
      <circle cx="30" cy="36" r="8" fill="#FFFFFF"/>
      <text x="64" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#FFFFFF">Chola</text>
      <text x="64" y="58" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#F87171" letter-spacing="1">FINANCE</text>
    </g>
  </svg>`,

  'sundaram-finance': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="22" fill="#0F172A" stroke="#EAB308" stroke-width="3"/>
      <circle cx="30" cy="36" r="8" fill="#EAB308"/>
      <text x="64" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">SUNDARAM</text>
      <text x="64" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="700" fill="#EAB308" letter-spacing="1.5">FINANCE</text>
    </g>
  </svg>`,

  // === BANKS ===
  'state-bank-of-india': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="24" fill="#0072BC"/>
      <circle cx="30" cy="30" r="7" fill="#FFFFFF"/>
      <rect x="27" y="30" width="6" height="20" fill="#FFFFFF"/>
      <text x="66" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">State Bank</text>
      <text x="66" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="600" fill="#38BDF8">of India</text>
    </g>
  </svg>`,

  'hdfc-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <!-- HDFC blue square with red cross -->
      <rect x="8" y="14" width="44" height="44" fill="#004C8F"/>
      <rect x="24" y="14" width="12" height="44" fill="#ED1C24"/>
      <rect x="8" y="30" width="44" height="12" fill="#ED1C24"/>
      <rect x="24" y="30" width="12" height="12" fill="#004C8F"/>
      <text x="64" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="1">HDFC BANK</text>
    </g>
  </svg>`,

  'icici-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="28" cy="36" r="24" fill="#B32B11"/>
      <text x="28" y="44" text-anchor="middle" font-family="serif" font-size="26" font-weight="900" font-style="italic" fill="#F97316">i</text>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" font-style="italic" fill="#F97316">ICICI <tspan fill="#FFFFFF">Bank</tspan></text>
    </g>
  </svg>`,

  'bank-of-baroda': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <path d="M 12 48 C 12 24 30 14 42 14 C 42 28 30 36 30 48 Z" fill="#F26522"/>
      <path d="M 28 48 C 28 28 42 18 52 18 C 52 32 40 38 40 48 Z" fill="#F26522" opacity="0.8"/>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">Bank of</text>
      <text x="62" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#F26522">Baroda</text>
    </g>
  </svg>`,

  'punjab-national-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="24" fill="#A20034"/>
      <circle cx="30" cy="36" r="14" fill="#FACC15"/>
      <circle cx="30" cy="36" r="8" fill="#A20034"/>
      <text x="64" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">punjab national</text>
      <text x="64" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#FACC15">bank</text>
    </g>
  </svg>`,

  'canara-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <polygon points="12,48 30,16 48,48" fill="#0072CE"/>
      <polygon points="24,20 42,52 60,20" fill="#F9A01B" opacity="0.9"/>
      <text x="70" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Canara</text>
      <text x="70" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#38BDF8">Bank</text>
    </g>
  </svg>`,

  'union-bank-of-india': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <path d="M 12 18 L 12 40 C 12 50 20 54 28 54 C 36 54 44 50 44 40 L 44 18" fill="none" stroke="#E31837" stroke-width="6" stroke-linecap="round"/>
      <path d="M 28 18 L 28 40 C 28 50 36 54 44 54 C 52 54 60 50 60 40 L 60 18" fill="none" stroke="#004A97" stroke-width="6" stroke-linecap="round"/>
      <text x="72" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">Union Bank</text>
      <text x="72" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="#94A3B8">of India</text>
    </g>
  </svg>`,

  'bank-of-india': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <!-- Red Star -->
      <polygon points="30,12 35,28 52,28 38,38 43,54 30,44 17,54 22,38 8,28 25,28" fill="#E31B23"/>
      <text x="62" y="35" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF">Bank of</text>
      <text x="62" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#F87171">India</text>
    </g>
  </svg>`,

  'indian-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <polygon points="30,14 48,24 48,46 30,56 12,46 12,24" fill="#003399" stroke="#E31B23" stroke-width="3"/>
      <circle cx="30" cy="35" r="8" fill="#FACC15"/>
      <text x="60" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">Indian Bank</text>
    </g>
  </svg>`,

  'central-bank-of-india': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <polygon points="30,14 50,26 50,48 30,58 10,48 10,26" fill="#005B94"/>
      <path d="M 22 36 L 38 36 M 30 28 L 38 36 L 30 44" stroke="#FFFFFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">Central Bank</text>
      <text x="62" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="#38BDF8">of India</text>
    </g>
  </svg>`,

  'indian-overseas-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="22" fill="#004D99"/>
      <circle cx="30" cy="36" r="16" fill="none" stroke="#FFFFFF" stroke-width="3"/>
      <path d="M 30 20 L 30 52 M 14 36 L 46 36" stroke="#FFFFFF" stroke-width="3"/>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="800" fill="#FFFFFF">Indian Overseas</text>
      <text x="62" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#38BDF8">Bank</text>
    </g>
  </svg>`,

  'uco-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="8" y="14" width="44" height="44" rx="10" fill="#00529B"/>
      <path d="M 22 38 C 22 30 30 24 38 30 C 38 38 30 44 22 38 Z" fill="#FFFFFF"/>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="1">UCO BANK</text>
    </g>
  </svg>`,

  'idbi-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="24" fill="#007934"/>
      <path d="M 18 36 C 24 24 36 24 42 36 C 36 48 24 48 18 36 Z" fill="#FFFFFF"/>
      <text x="64" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="1">IDBI BANK</text>
    </g>
  </svg>`,

  'federal-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <polygon points="30,12 50,22 50,44 30,58 10,44 10,22" fill="#003366" stroke="#FDB913" stroke-width="2.5"/>
      <text x="30" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#FDB913">F</text>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" letter-spacing="1">FEDERAL BANK</text>
    </g>
  </svg>`,

  'yes-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="8" y="18" width="44" height="36" rx="6" fill="#002D62"/>
      <path d="M 16 36 L 26 44 L 44 26" fill="none" stroke="#E31B23" stroke-width="5" stroke-linecap="round"/>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="1">YES <tspan fill="#E31B23">BANK</tspan></text>
    </g>
  </svg>`,

  'karur-vysya-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="6" y="16" width="56" height="40" rx="10" fill="#78BE20"/>
      <text x="34" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#000000">KVB</text>
      <text x="70" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">Karur Vysya</text>
      <text x="70" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#86EFAC">Bank</text>
    </g>
  </svg>`,

  'south-indian-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="6" y="16" width="48" height="40" rx="6" fill="#C8102E"/>
      <path d="M 12 36 L 24 24 M 18 42 L 34 26 M 26 44 L 42 28" stroke="#FFFFFF" stroke-width="3"/>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="800" fill="#FFFFFF">SOUTH INDIAN</text>
      <text x="62" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="700" fill="#F87171">Bank</text>
    </g>
  </svg>`,

  'jk-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="22" fill="#BE0027"/>
      <text x="30" y="43" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">JK</text>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="900" fill="#FFFFFF">J&amp;K Bank</text>
    </g>
  </svg>`,

  'vijaya-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="6" y="16" width="48" height="40" rx="6" fill="#E31837"/>
      <circle cx="30" cy="36" r="12" fill="#FACC15"/>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">VIJAYA BANK</text>
    </g>
  </svg>`,

  'andhra-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <path d="M 16 24 C 28 14 42 28 30 38 C 18 48 32 60 44 48" fill="none" stroke="#E31837" stroke-width="6" stroke-linecap="round"/>
      <path d="M 22 20 C 34 10 48 24 36 34 C 24 44 38 56 50 44" fill="none" stroke="#003399" stroke-width="4" stroke-linecap="round"/>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Andhra Bank</text>
    </g>
  </svg>`,

  'syndicate-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="22" fill="#F97316"/>
      <circle cx="30" cy="36" r="14" fill="#0F172A"/>
      <text x="30" y="43" text-anchor="middle" font-family="serif" font-size="18" font-weight="900" fill="#F97316">S</text>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Syndicate Bank</text>
    </g>
  </svg>`,

  'allahabad-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <polygon points="30,14 10,50 50,50" fill="none" stroke="#00A0DF" stroke-width="5" stroke-linejoin="round"/>
      <circle cx="30" cy="38" r="5" fill="#00A0DF"/>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Allahabad Bank</text>
    </g>
  </svg>`,

  'oriental-bank-of-commerce': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="22" fill="#00843D"/>
      <circle cx="30" cy="36" r="12" fill="#FFFFFF"/>
      <circle cx="30" cy="36" r="6" fill="#00843D"/>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF">ORIENTAL BANK</text>
      <text x="62" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#86EFAC">OF COMMERCE</text>
    </g>
  </svg>`,

  'dena-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="8" y="16" width="44" height="40" rx="8" fill="#1C3F94"/>
      <text x="30" y="43" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#FACC15">D</text>
      <text x="62" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">Dena Bank</text>
    </g>
  </svg>`,

  'lakshmi-vilas-bank': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <rect x="6" y="16" width="48" height="40" rx="6" fill="#C8102E"/>
      <circle cx="30" cy="36" r="14" fill="#FACC15"/>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#FFFFFF">LAKSHMI VILAS</text>
      <text x="62" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="800" fill="#FACC15">BANK</text>
    </g>
  </svg>`,

  'united-bank-of-india': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="22" fill="#00843D"/>
      <path d="M 18 42 C 24 32 36 32 42 42" stroke="#FFFFFF" stroke-width="3" fill="none"/>
      <circle cx="30" cy="28" r="5" fill="#FACC15"/>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="800" fill="#FFFFFF">United Bank</text>
      <text x="62" y="54" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="600" fill="#86EFAC">of India</text>
    </g>
  </svg>`,

  'bank-of-rajasthan': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 100" width="100%" height="100%">
    <g transform="translate(15, 14)">
      <circle cx="30" cy="36" r="22" fill="#002D62" stroke="#C59B27" stroke-width="2"/>
      <text x="30" y="42" text-anchor="middle" font-family="serif" font-size="18" font-weight="900" fill="#C59B27">R</text>
      <text x="62" y="34" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF">Bank of</text>
      <text x="62" y="55" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="800" fill="#C59B27">Rajasthan</text>
    </g>
  </svg>`
};

let count = 0;
for (const [slug, svg] of Object.entries(partners)) {
  const filePath = path.join(partnersDir, `${slug}.svg`);
  fs.writeFileSync(filePath, svg.trim());
  count++;
}

console.log(`Generated ${count} partner SVGs in ${partnersDir}`);
