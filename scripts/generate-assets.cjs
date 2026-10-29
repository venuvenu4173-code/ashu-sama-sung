const fs = require('fs');
const path = require('path');

const brandingDir = path.join(__dirname, '../public/assets/branding');
const partnersDir = path.join(__dirname, '../public/assets/partners');

if (!fs.existsSync(brandingDir)) fs.mkdirSync(brandingDir, { recursive: true });
if (!fs.existsSync(partnersDir)) fs.mkdirSync(partnersDir, { recursive: true });

// 1. ISHA ASSOCIATES OFFICIAL LOGO (matching isha3.jpeg)
const ishaLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 680" width="100%" height="100%">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9A6B1F" />
      <stop offset="35%" stop-color="#C59B27" />
      <stop offset="70%" stop-color="#E5C778" />
      <stop offset="100%" stop-color="#B8861B" />
    </linearGradient>
    <linearGradient id="goldBall" x1="20%" y1="20%" x2="90%" y2="90%">
      <stop offset="0%" stop-color="#F3DC9B" />
      <stop offset="50%" stop-color="#C59B27" />
      <stop offset="100%" stop-color="#8E6116" />
    </linearGradient>
    <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#C59B27" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Monogram Group -->
  <g transform="translate(10, 10)">
    <!-- Golden Dot of i -->
    <circle cx="316" cy="128" r="28" fill="url(#goldBall)" filter="url(#subtleGlow)"/>

    <!-- Stem of i with serifs -->
    <path d="M 284 175 C 298 177 302 185 302 205 L 302 425 C 302 445 296 453 280 455 L 280 465 L 352 465 L 352 455 C 336 453 330 445 330 425 L 330 205 C 330 185 334 177 348 175 L 348 170 L 284 170 Z" fill="#0D1E36"/>

    <!-- Right diagonal leg of A -->
    <path d="M 432 115 L 434 122 L 536 425 C 542 443 550 452 566 455 L 566 465 L 490 465 L 490 455 C 504 452 508 444 502 425 L 476 348 L 442 242 L 406 135 Z" fill="#0D1E36"/>

    <!-- Golden Swoosh / Left leg & crossbar of A -->
    <path d="M 276 465 C 310 440 355 385 410 325 C 475 255 580 238 682 240 C 650 248 570 262 505 310 C 430 365 375 428 328 465 Z" fill="url(#goldGrad)" filter="url(#subtleGlow)"/>
  </g>

  <!-- Typography -->
  <!-- 'isha' in refined Roman serif style -->
  <text x="400" y="555" text-anchor="middle" font-family="'Playfair Display', 'Didot', 'Georgia', serif" font-size="94" font-weight="700" letter-spacing="16" fill="#0D1E36">isha</text>

  <!-- 'associates' in geometric wide-spaced sans -->
  <text x="400" y="605" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Inter', 'Montserrat', sans-serif" font-size="34" font-weight="600" letter-spacing="14" fill="url(#goldGrad)">associates</text>

  <!-- Tagline -->
  <text x="400" y="648" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="21" font-weight="500" letter-spacing="3" fill="#334155">Funding today, Secure tomorrow</text>
</svg>`;

// 2. ISHA ASSOCIATES DARK THEME LOGO (White/Silver letters + Glowing Gold Swoosh for dark backgrounds)
const ishaLogoDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 680" width="100%" height="100%">
  <defs>
    <linearGradient id="goldGradDark" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B8861B" />
      <stop offset="35%" stop-color="#DFB75A" />
      <stop offset="70%" stop-color="#FDF0CD" />
      <stop offset="100%" stop-color="#C59B27" />
    </linearGradient>
    <linearGradient id="goldBallDark" x1="20%" y1="20%" x2="90%" y2="90%">
      <stop offset="0%" stop-color="#FFF3D4" />
      <stop offset="50%" stop-color="#DFB75A" />
      <stop offset="100%" stop-color="#9A6B1F" />
    </linearGradient>
    <filter id="subtleGlowDark" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#DFB75A" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Monogram Group -->
  <g transform="translate(10, 10)">
    <!-- Golden Dot of i -->
    <circle cx="316" cy="128" r="28" fill="url(#goldBallDark)" filter="url(#subtleGlowDark)"/>

    <!-- Stem of i with serifs (Crisp Platinum / Ivory White) -->
    <path d="M 284 175 C 298 177 302 185 302 205 L 302 425 C 302 445 296 453 280 455 L 280 465 L 352 465 L 352 455 C 336 453 330 445 330 425 L 330 205 C 330 185 334 177 348 175 L 348 170 L 284 170 Z" fill="#F8FAFC"/>

    <!-- Right diagonal leg of A -->
    <path d="M 432 115 L 434 122 L 536 425 C 542 443 550 452 566 455 L 566 465 L 490 465 L 490 455 C 504 452 508 444 502 425 L 476 348 L 442 242 L 406 135 Z" fill="#F8FAFC"/>

    <!-- Golden Swoosh / Left leg & crossbar of A -->
    <path d="M 276 465 C 310 440 355 385 410 325 C 475 255 580 238 682 240 C 650 248 570 262 505 310 C 430 365 375 428 328 465 Z" fill="url(#goldGradDark)" filter="url(#subtleGlowDark)"/>
  </g>

  <!-- Typography -->
  <!-- 'isha' in crisp bright silver/ivory -->
  <text x="400" y="555" text-anchor="middle" font-family="'Playfair Display', 'Didot', 'Georgia', serif" font-size="94" font-weight="700" letter-spacing="16" fill="#F8FAFC">isha</text>

  <!-- 'associates' in glowing warm gold -->
  <text x="400" y="605" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Inter', 'Montserrat', sans-serif" font-size="34" font-weight="600" letter-spacing="14" fill="url(#goldGradDark)">associates</text>

  <!-- Tagline in soft platinum silver -->
  <text x="400" y="648" text-anchor="middle" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="21" font-weight="500" letter-spacing="3" fill="#94A3B8">Funding Today, Securing Tomorrow</text>
</svg>`;

// 3. ISHA MONOGRAM ICON (Square for Favicon & Mobile Compact App Bar)
const ishaIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="100%" stop-color="#050B14"/>
    </linearGradient>
    <linearGradient id="iconGold" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B8861B"/>
      <stop offset="50%" stop-color="#DFB75A"/>
      <stop offset="100%" stop-color="#F7E2A8"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect width="506" height="506" x="3" y="3" rx="110" fill="none" stroke="#C59B27" stroke-width="3" stroke-opacity="0.3"/>
  <g transform="translate(18, 20) scale(0.95)">
    <!-- Golden Dot of i -->
    <circle cx="216" cy="120" r="26" fill="url(#iconGold)"/>
    <!-- Stem of i -->
    <path d="M 188 165 C 200 167 204 174 204 192 L 204 380 C 204 398 198 405 184 407 L 184 416 L 248 416 L 248 407 C 234 405 228 398 228 380 L 228 192 C 228 174 232 167 244 165 L 244 160 L 188 160 Z" fill="#F8FAFC"/>
    <!-- Right leg of A -->
    <path d="M 314 110 L 316 116 L 402 380 C 408 395 414 403 428 406 L 428 416 L 362 416 L 362 406 C 374 403 378 396 372 380 L 350 314 L 322 224 L 290 128 Z" fill="#F8FAFC"/>
    <!-- Golden Swoosh -->
    <path d="M 180 416 C 210 395 250 348 296 295 C 352 232 444 218 532 220 C 504 227 434 240 380 282 C 314 330 266 384 225 416 Z" fill="url(#iconGold)"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(brandingDir, 'isha-logo.svg'), ishaLogoSvg);
fs.writeFileSync(path.join(brandingDir, 'isha-logo-dark.svg'), ishaLogoDarkSvg);
fs.writeFileSync(path.join(brandingDir, 'isha-icon.svg'), ishaIconSvg);

console.log('Isha branding assets created successfully!');
