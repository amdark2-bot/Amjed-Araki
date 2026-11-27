import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

const SOURCE_FILES = [
  'package.json',
  'metadata.json',
  'tsconfig.json',
  'vite.config.ts',
  '.env.example',
  'index.html',
  'public/robots.txt',
  'public/sitemap.xml',
  'src/index.css',
  'src/main.tsx',
  'src/App.tsx',
  'src/types/i18n.ts',
  'src/data/contact.ts',
  'src/data/services.ts',
  'src/data/translations.ts',
  'src/components/ResilientImage.tsx',
  'src/components/Header.tsx',
  'src/components/Hero.tsx',
  'src/components/ServicesExplorer.tsx',
  'src/components/DivisionsShowcase.tsx',
  'src/components/FounderPhilosophy.tsx',
  'src/components/LocationMapBox.tsx',
  'src/components/ConsultationForm.tsx',
  'src/components/Footer.tsx',
  'scripts/build-standalone-html.mjs',
];

const imageDir = path.join(rootDir, 'src', 'assets', 'images');
const imageFiles = fs.existsSync(imageDir)
  ? fs.readdirSync(imageDir).sort().map((name) => {
      const stats = fs.statSync(path.join(imageDir, name));
      return { name, sizeKb: Math.round(stats.size / 1024) };
    })
  : [];

const header = `# ============================================================================
# MASTER PROMPT & COMPLETE SOURCE ARCHIVE
# Project: أمجويد ذكاء إبداعي ماركت | Amjoid AI Market
# Founder: مستشار المستشارين د. أمجد العركي (Consultant of Consultants Dr. Amjed El Araki)
# Generated: ${new Date().toISOString()}
# ============================================================================

## 1. PROMPT SPECIFICATION (FOR REBUILDING OR DEPLOYING ON ANY PLATFORM)

Build a complete, responsive, production-grade 4-language (Arabic RTL default, English, French, Spanish) consultancy and creative services web application for:
- **Brand (Arabic)**: أمجويد ذكاء إبداعي ماركت / أمجويد ماركت
- **Brand (Latin)**: Amjoid AI Market / Amjoid Creative Intelligence Market
- **Founder & Lead**: مستشار المستشارين د. أمجد العركي (Consultant of Consultants Dr. Amjed El Araki)

### A. Visual Design System, Colors & Typography
- **Color Palette**:
  - Primary Executive Navy: \`#0B1324\` (Dark headers, hero card bases, primary CTAs, Founder section background)
  - Deep Secondary Navy: \`#121D35\` (Headquarters card & Google Map container)
  - Navy Gradient Stops: \`#0F1B33\`, \`#132240\`, \`#162340\`
  - Warm Gold / Amber Accents: \`#B4832C\` (Pin & underline highlight), \`#8F6314\` (Kicker & high-contrast gold links), \`amber-300\` / \`amber-200\` on dark backgrounds
  - Light Surface & Text: \`#F8FAFC\` (\`bg-slate-50\`), \`#FFFFFF\` (\`bg-white\`), \`slate-900\` / \`slate-600\` / \`slate-200\`
  - WhatsApp / Success Green: \`emerald-700\` / \`emerald-600\` / \`emerald-400\`
- **Typography (Google Fonts)**:
  - Display / Editorial: \`"Playfair Display"\`, \`"Amiri"\`, Georgia, serif
  - Body / UI Sans: \`"Plus Jakarta Sans"\`, \`"Cairo"\`, system-ui, sans-serif
  - Numeric / Code / Phones: \`"JetBrains Mono"\`, monospace with \`tabular-nums\` and \`dir="ltr"\`
- **Multilingual & Directionality**:
  - Default language: Arabic (\`lang="ar"\`, \`dir="rtl"\`)
  - Supported switchers: \`ar\` (العربية RTL), \`en\` (English LTR), \`fr\` (Français LTR), \`es\` (Español LTR)
  - URL query parameter sync: \`?lang=ar|en|fr|es\`

### B. Exact Contact Channels, Links, Address & Google Maps
- **Address (Cairo / Giza Headquarters)**:
  القاهرة . الجيزة .. 166 شارع الملك فيصل الرئيسي . أبراج سعودي 1، 2 مقابل هارموني للتكييف . الممر التحت
  (166 King Faisal Main St., Saudi Towers 1 & 2, Opposite Harmony Air Conditioning, Lower Passage, Giza, Cairo, Egypt)
- **Mobile Numbers**: \`+201035712929\`, \`+201223606178\`
- **WhatsApp**: \`+249912282169\` — \`https://wa.me/249912282169\`
- **Email**: \`amdark2@gmail.com\`
- **WordPress Portal**: \`https://amjedaraki.wordpress.com\`
- **Generated App URL**: \`https://ais-pre-lxxcl5kev65joeekup6kaq-558592280140.europe-west3.run.app\`
- **Google Maps Share Link**: \`https://goo.gl/maps/9xWH59A3hV7QJyhu6\`
- **Exact Coordinates**: \`lat: 29.9973\`, \`lng: 31.1558\` (Google Maps JS API via \`@vis.gl/react-google-maps\` with \`AdvancedMarker\`, \`Pin\`, \`InfoWindow\`, Share/Copy/Open links, plus automatic Fallback Card if key/quota unavailable)

### C. Sections, Pages & Interactive Features
1. **Header**: Sticky 3-zone top bar (Wordmark, 5 nav links, 1 Consultation CTA + mobile drawer).
2. **Hero**: 4-language switcher bar, welcome message & philosophy intro, dual CTAs, hero studio photography card, and 4-column executive metrics strip (\`06\` divisions, \`32\` services, \`04\` languages, \`100%\` local & remote correspondence).
3. **ServicesExplorer**: Interactive search bar + 7 filter tabs (All + 6 Divisions) rendering all **32 services** in full 4-language copy, each with direct consultation pre-selection.
4. **DivisionsShowcase**: 4-card Asymmetric Bento Grid featuring Media/Music/Events, Digital Transformation/IoT, Education/Training, and Investment/Feasibility/Crisis Advisory.
5. **FounderPhilosophy & LocationMapBox**: Dr. Amjed El Araki's signature quote & story, copyable Giza headquarters address, clickable Tel/WhatsApp/Email/Website links, and interactive Google Map box with Share & Copy controls.
6. **ConsultationForm**: Client-side validated request form (Full Name, Phone/Email, Language, Remote/Office delivery, 32-service selector + General Consultation, Project Brief) generating a unique \`AMJ-XXXXXX\` reference receipt with Copy & direct WhatsApp submission.
7. **Footer**: Links bar, language switcher, standalone HTML export download (\`amjoid-ai-market.html\`), and prompt archive download (\`amjoid-ai-market-prompt.txt\`).

### D. Images & Media Assets
${imageFiles
  .map(
    (img) =>
      `- \`/src/assets/images/${img.name}\` (${img.sizeKb} KB) — High-resolution editorial photography embedded inline in standalone HTML export.`,
  )
  .join('\n')}
- \`hero_amjoid_consultancy_1795534456812.jpg\`: Executive consultancy & creative strategy studio backdrop (Hero card).
- \`pillar_media_music_1795534457661.jpg\`: Broadcast media, audio/music production, and conferences stage lighting (Bento Card 01).
- \`pillar_digital_iot_1795534457491.jpg\`: Digital transformation, web architecture, SEO, and IoT systems (Bento Card 02).
- \`pillar_investment_advisory_1795534457776.jpg\`: Financial, commercial, investment, and strategic crisis advisory boardroom (Bento Card 04).

### E. Complete 6 Practice Divisions & 32 Services
- **Division 01 (\`writing\`)**: Services 01–07 (Creative Writing & Docs PDF/Xdoc, Professional Translation & Live Broadcast, News & Copy Editing, Books/Novels/Articles/Poetry, Comprehensive Journalism).
- **Division 02 (\`design\`)**: Services 08–12 (Corporate Stationery & Financial Prints, Logos/Covers/Catalogs, Illuminated Signage/Brochures/Cards, Wall Murals/Sculpture/Lighting, CNC/Laser/3D Printing/Textiles).
- **Division 03 (\`media\`)**: Services 13–17 (Presentations & PowerPoint, Motion Graphics & YouTube Video, Invitations/Trophies/Shields, Events/Festivals/Conferences, Voiceover/Music Composition/Audio Ads).
- **Division 04 (\`digital\`)**: Services 18–21 (App & Website Development, Social Media & SEO, Smart Systems/IoT/Automation, General Tech & Media Advisory).
- **Division 05 (\`education\`)**: Services 22–26 (Educational Tools & Curricula, Remote & In-Person Training, Public Lectures & Seminars, Scientific Studies & Academic Books, Sports & Games Coaching/Rehab/Development).
- **Division 06 (\`advisory\`)**: Services 27–32 (Investment/Feasibility/Partnerships, Sales/Marketing/Export/Import, Production Lines & Equipment Supply, Administrative/Financial/Commercial/Investment Consulting, Supervision/Systems Analysis/Crisis Management).

================================================================================
## 2. COMPLETE SOURCE CODE FILES (VERBATIM WITH ALL FORMATTING, TEXTS & DATA)
================================================================================
`;

const fileBlocks = SOURCE_FILES.filter((relPath) =>
  fs.existsSync(path.join(rootDir, relPath)),
).map((relPath) => {
  const content = fs.readFileSync(path.join(rootDir, relPath), 'utf8');
  return `\n\n--- FILE: ${relPath} ---\n\`\`\`\n${content}\n\`\`\`\n`;
});

const fullPromptDocument = `${header}${fileBlocks.join('')}`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, 'amjoid-ai-market-prompt.txt'), fullPromptDocument, 'utf8');

if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'amjoid-ai-market-prompt.txt'), fullPromptDocument, 'utf8');
}

const sizeKb = Math.round(Buffer.byteLength(fullPromptDocument, 'utf8') / 1024);
console.log(`Generated complete prompt archive: amjoid-ai-market-prompt.txt (${sizeKb} KB)`);
