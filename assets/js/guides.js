// ── guides.js ──────────────────────────────────────────────────────────────────
// Characters, weapons & materials now live in storage.js.
// They are imported here and re-exported so any page that still imports
// them from guides.js keeps working without changes.

import { characters, weapons, materials, artifacts, teams } from './storage.js';
export { characters, weapons, materials, artifacts, teams };

// ── Guides ─────────────────────────────────────────────────────────────────────
// weapons / materials / teamCharacters reference storage entries by NAME.
export const guides = [
  {
    id: 1,
    title: "Linnea Support Build",
    desc: "Best artifacts, weapons & rotation for Linnea.",
    type: "character",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2026/04/03/d9aa90d8283f6f1f47d2f8a59ca1b7cb_6843233182538136928.png?x-oss-process=image%2Fformat%2Cwebp",
    content: "Complete DPS build with stat priority, artifacts, weapons and teams.",
    characterName: "Linnea",
    weapons: [
      "Golden Frostbound Oath", "Mistsplitter Reforged", "Primordial Jade Cutter",
      "Aquila Favonia", "Favonius Warbow"
    ],
    materials: [
      "Hero's Wit", "Mora", "Tattered Warrant", 
      "Prithiva Topaz Sliver", "Etherwing Moth", "Vayuda Turquoise Chunk",
      "Vayuda Turquoise Gemstone", "Sea Ganoderma",
      "Teachings of Transience", "Teachings of Vagrancy", "Guide to Vagrancy",
      "Elixir of the Heretic",
    ],
    teamCharacters: ["Linnea", "Bennett", "Kazuha", "Xiangling", "Zhongli", "Sucrose"],
    talentNames: ["Normal Attack: Arrow of the Watcher", "Eternal Bloom", "Cascade of Starlight"],
    artifacts: [  
      "A Day Carved From Rising Winds",
      "Aubade of Morningstar and Moon",
      "Viridescent Venerer"
    ]
  },
  {
    id: 2,
    title: "Nefer Support Build",
    desc: "Best support setup for Nefer.",
    type: "character",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/10/21/79a88934b1d04a698c1760fd9b76c60b_2727330890292955170.png?x-oss-process=image%2Fformat%2Cwebp",
    content: "Support role guide with buffs, rotation and synergy tips.",
    characterName: "Nefer",
    weapons: ["Thrilling Tales of Dragon Slayers"],
    materials: [
      "Whopperflower Nectar", "Shimmering Nectar", "Energy Nectar",
      "Guide to Transience", "Philosophies of Transience",
      "Gilded Scale", "Crown of Insight"
    ],
    teamCharacters: ["Nefer", "Bennett", "Zhongli"],
    artifacts: [
      "Viridescent Venerer",
      "Desert Pavilion Chronicle"
    ]
  },
  {
    id: 3,
    title: "Best Navia Team Comps",
    desc: "Best meta teams for Navia.",
    type: "team",
    image: "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2023/12/18/35428890/594b06b9353eb1dc16da5b9ed61dda0d_6286113421621366322.png?x-oss-process=image%2Fformat%2Cwebp",
    content: "Top team setups, reactions and synergy explained.",
    characterName: "Navia",
    weapons: [],
    materials: [],
    teamCharacters: ["Navia", "Bennett", "Xiangling", "Zhongli"],
    artifacts: []
  },
  {
    id: 4,
    title: "Flins Build & Teams",
    desc: "Best meta teams for Flins.",
    type: "team",
    image: "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/09/26/047f903cc0cfa0ec8bb4bf6ea26e849c_3829668269435948845.png?x-oss-process=image%2Fformat%2Cwebp",
    content: "Top team setups, reactions and synergy explained.",
    characterName: "Flins",
    weapons: [],
    materials: [],
    teamCharacters: ["Flins", "Ineffa", "Columbina", "Sucrose"],
    artifacts: []
  },

];

// ── Type config ────────────────────────────────────────────────────────────────
const GUIDE_TYPE_CONFIG = {
  character: {
    color: "#f0c060",
    label: "Character",
    icon: `<i class="fa-solid fa-user"></i>`
  },
  team: {
    color: "#60a5fa",
    label: "Team Comp",
    icon: `<i class="fa-solid fa-users"></i>`
  },
  combat: {
    color: "#c084fc",
    label: "Combat",
    icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
  },
  exploration: {
    color: "#4ade80",
    label: "Exploration",
    icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`
  },
  default: {
    color: "#9ca3af",
    label: "Guide",
    icon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
  },
};

function getGuideConfig(type) {
  return GUIDE_TYPE_CONFIG[type] || GUIDE_TYPE_CONFIG.default;
}

// ── Inject shared styles once ──────────────────────────────────────────────────
function injectGuideStyles() {
  if (document.getElementById("gi-guide-styles")) return;
  const style = document.createElement("style");
  style.id = "gi-guide-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600&display=swap');

    .gi-guides-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      font-family: 'Raleway', sans-serif;
    }

    .gi-guide-card {
      position: relative;
      background: linear-gradient(160deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015));
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 16px;
      overflow: hidden;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      transition: transform 0.35s cubic-bezier(.22,.68,0,1.2),
                  border-color 0.3s ease,
                  box-shadow 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }

    .gi-guide-card:hover {
      transform: translateY(-6px) scale(1.012);
      box-shadow: 0 16px 48px rgba(0,0,0,0.5);
    }

    .gi-guide-card__img-wrap {
      position: relative;
      height: 300px;
      overflow: hidden;
      flex-shrink: 0;
    }

    .gi-guide-card__img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s cubic-bezier(.22,.68,0,1.2);
    }

    .gi-guide-card:hover .gi-guide-card__img-wrap img {
      transform: scale(1.09);
    }

    .gi-guide-card__img-wrap::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(8,8,18,0.88) 0%, rgba(8,8,18,0.1) 60%, transparent 100%);
      pointer-events: none;
    }

    .gi-guide-card__type-pill {
      position: absolute;
      bottom: 12px;
      left: 14px;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 4px 11px 4px 8px;
      border-radius: 20px;
      background: rgba(0,0,0,0.6);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.1);
      font-size: 0.68rem;
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .gi-guide-card__type-icon {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }

    .gi-guide-card__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 1.25rem 1.4rem 1.4rem;
    }

    .gi-guide-card__title {
      font-family: 'Cinzel', serif;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      margin: 0 0 0.5rem;
      line-height: 1.4;
      transition: color 0.25s ease;
    }

    .gi-guide-card:hover .gi-guide-card__title {
      color: var(--gi-card-accent, #f0c060);
    }

    .gi-guide-card__desc {
      font-size: 0.83rem;
      color: rgba(255,255,255,0.48);
      line-height: 1.65;
      flex: 1;
      margin: 0 0 1.1rem;
    }

    .gi-guide-card__sep {
      height: 1px;
      background: linear-gradient(to right, rgba(255,255,255,0.06), transparent);
      margin-bottom: 1rem;
    }

    .gi-guide-card__footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .gi-guide-card__cta {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      opacity: 0.65;
      transition: gap 0.25s, opacity 0.25s;
    }

    .gi-guide-card:hover .gi-guide-card__cta {
      gap: 9px;
      opacity: 1;
    }

    .gi-guide-card::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      border-radius: 16px 0 0 16px;
      background: var(--gi-card-accent, #f0c060);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .gi-guide-card:hover::before {
      opacity: 1;
    }

    .gi-guide-card__weapons {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }

    .gi-guide-card__weapon-icon {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.09);
      flex-shrink: 0;
      transition: border-color 0.2s, transform 0.2s;
    }

    .gi-guide-card__weapon-icon:hover {
      border-color: rgba(255,255,255,0.25);
      transform: scale(1.12);
    }

    .gi-guide-card__weapon-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 3px;
      display: block;
    }

    .gi-guide-card__weapon-more {
      font-size: 0.7rem;
      font-weight: 700;
      color: rgba(255,255,255,0.35);
      letter-spacing: 0.04em;
      padding-left: 2px;
    }
  `;
  document.head.appendChild(style);
}

// ── Render guides grid ─────────────────────────────────────────────────────────
export function renderGuides(containerId = "guidesGrid") {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  injectGuideStyles();
  grid.classList.add("gi-guides-grid");

  const limited = guides.slice(0, 4);

  grid.innerHTML = limited.map(guide => {
    const cfg = getGuideConfig(guide.type);

    // Resolve up to 4 weapon images by name
    const guideWeapons = (guide.weapons || [])
      .map(name => weapons.find(w => w.name === name))
      .filter(w => w && w.image)
      .slice(0, 4);

    const weaponsHtml = guideWeapons.length > 0 ? `
      <div class="gi-guide-card__weapons">
        ${guideWeapons.map(w => `
          <div class="gi-guide-card__weapon-icon" title="${w.name}">
            <img src="${w.image}" alt="${w.name}" loading="lazy"
                 onerror="this.parentElement.style.display='none'">
          </div>
        `).join('')}
        ${guide.weapons.length > 4 ? `<span class="gi-guide-card__weapon-more">+${guide.weapons.length - 4}</span>` : ''}
      </div>` : '';

    return `
      <a href="guide-detail.html?id=${guide.id}" target="_blank"
         class="gi-guide-card"
         style="--gi-card-accent: ${cfg.color}">

        <div class="gi-guide-card__img-wrap">
          <img src="${guide.image}" alt="${guide.title}" loading="lazy">
          <span class="gi-guide-card__type-pill" style="color:${cfg.color}">
            <span class="gi-guide-card__type-icon">${cfg.icon}</span>
            ${cfg.label}
          </span>
        </div>

        <div class="gi-guide-card__body">
          <h3 class="gi-guide-card__title">${guide.title}</h3>
          <p class="gi-guide-card__desc">${guide.desc}</p>

          ${weaponsHtml}

          <div class="gi-guide-card__sep"></div>

          <div class="gi-guide-card__footer">
            <span class="gi-guide-card__cta" style="color:${cfg.color}">
              Open Guide <span>→</span>
            </span>
          </div>
        </div>

      </a>
    `;
  }).join("");
}

// ── Search export ──────────────────────────────────────────────────────────────
export function getGuidesData() {
  return guides.map(item => ({
    ...item,
    type: "guide"
  }));
}

// ── Auto-run ───────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("guidesGrid")) {
    renderGuides();
  }
});