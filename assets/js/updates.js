export const updates = [
  {
    id: 1,
    title: "Linnea & Chasca Event Wish Guide",
    category: "Version 6.5 • Phase 1",
    type: "banner",
    image: "assets/images/banners/linnea-chasca.png",
    characters: ["Linnea", "Chasca"],
    description: "Should you pull Linnea or Chasca? Full analysis, teams & real value.",
    date: "2026-04-07",
    status: "active"
  },
  {
    id: 2,
    title: "Nefer & Lauma Event Wish Guide",
    category: "Version 6.5 • Phase 2",
    type: "banner",
    image: "assets/images/banners/nefer-lauma.png",
    characters: ["Nefer", "Lauma"],
    description: "Should you pull Nefer or Lauma? Full analysis, teams & real value.",
    date: "2026-04-08"
  },
  {
    id: 3,
    title: "Fontaine Chronicled Wish",
    category: "Version 6.5 • Phase 2",
    type: "banner",
    image: "assets/images/banners/fontaine_chronicled_wish.png",
    characters: ["Emilie", "Clorinde", "Navia", "Sigewinne", "Lyney"],
    description: "Banner details, pity system & best pulls explained.",
    date: "2026-04-09"
  },
  // {
  //   id: 4,
  //   title: "Lauma Banner Guide",
  //   category: "Version 6.5 • Phase 2",
  //   type: "banner",
  //   image: "",
  //   description: "Complete pull guide, team synergy & value analysis.",
  //   date: "2026-04-19"
  // },
  // {
  //   id: 5,
  //   title: "Nefer Banner Guide",
  //   category: "Version 6.5 • Phase 2",
  //   type: "banner",
  //   image: "",
  //   description: "Should you pull Nefer? Meta analysis & team builds.",
  //   date: "2026-04-19"
  // },
];

// ── Type config ────────────────────────────────────────────────────────────────
const TYPE_CONFIG = {
  banner: { color: "#f0c060", label: "Banner", dot: "#f0c060" },
  exploration: { color: "#4ade80", label: "Exploration", dot: "#4ade80" },
  meta: { color: "#c084fc", label: "Meta", dot: "#c084fc" },
  event: { color: "#60a5fa", label: "Event", dot: "#60a5fa" },
  default: { color: "#9ca3af", label: "Update", dot: "#9ca3af" },
};

function getConfig(type) {
  return TYPE_CONFIG[type] || TYPE_CONFIG.default;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ── Inject shared styles once ──────────────────────────────────────────────────
function injectUpdateStyles() {
  if (document.getElementById("gi-update-styles")) return;
  const style = document.createElement("style");
  style.id = "gi-update-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600&display=swap');

    .gi-updates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.75rem;
      font-family: 'Raleway', sans-serif;
    }

    .gi-update-card {
      position: relative;
      background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 16px;
      overflow: hidden;
      text-decoration: none;
      display: block;
      transition: transform 0.35s cubic-bezier(.22,.68,0,1.2),
                  border-color 0.3s ease,
                  box-shadow 0.3s ease;
      box-shadow: 0 4px 24px rgba(0,0,0,0.35);
    }

    .gi-update-card:hover {
      transform: translateY(-6px) scale(1.012);
      border-color: rgba(240,192,96,0.28);
      box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(240,192,96,0.12);
    }

    .gi-update-card__img-wrap {
      position: relative;
      overflow: hidden;
      height: 210px;
    }

    .gi-update-card__img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(.22,.68,0,1.2);
      display: block;
    }

    .gi-update-card:hover .gi-update-card__img-wrap img {
      transform: scale(1.08);
    }

    .gi-update-card__img-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(10,10,20,0.82) 0%, transparent 55%);
      pointer-events: none;
    }

    .gi-update-card__badge {
      position: absolute;
      top: 14px;
      left: 14px;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 20px;
      background: rgba(0,0,0,0.55);
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255,255,255,0.1);
      font-size: 0.68rem;
      font-family: 'Raleway', sans-serif;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .gi-update-card__badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .gi-update-card__status {
      position: absolute;
      top: 14px;
      right: 14px;
      padding: 3px 9px;
      border-radius: 20px;
      background: rgba(74,222,128,0.18);
      border: 1px solid rgba(74,222,128,0.35);
      color: #4ade80;
      font-size: 0.65rem;
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .gi-update-card__body {
      padding: 1.35rem 1.5rem 1.5rem;
    }

    .gi-update-card__meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.6rem;
    }

    .gi-update-card__category {
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.07em;
      text-transform: uppercase;
    }

    .gi-update-card__date {
      font-size: 0.7rem;
      color: rgba(255,255,255,0.35);
      font-weight: 400;
    }

    .gi-update-card__title {
      font-family: 'Cinzel', serif;
      font-size: 1.05rem;
      font-weight: 600;
      color: #fff;
      line-height: 1.4;
      margin: 0 0 0.6rem;
      transition: color 0.25s ease;
    }

    .gi-update-card:hover .gi-update-card__title {
      color: #f0c060;
    }

    .gi-update-card__desc {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.52);
      line-height: 1.65;
      margin: 0 0 1.1rem;
    }

    .gi-update-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .gi-update-card__characters {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  max-width: 65%;
}

    .gi-update-card__char-tag {
      padding: 2px 8px;
      border-radius: 10px;
      background: rgba(240,192,96,0.1);
      border: 1px solid rgba(240,192,96,0.22);
      font-size: 0.65rem;
      color: #f0c060;
      font-weight: 600;
    }

    .gi-update-card__cta {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      transition: gap 0.25s ease, opacity 0.25s ease;
      opacity: 0.7;
    }

    .gi-update-card:hover .gi-update-card__cta {
      gap: 8px;
      opacity: 1;
    }

    .gi-update-card__divider {
      height: 1px;
      background: linear-gradient(to right, rgba(255,255,255,0.06), transparent);
      margin: 0 1.5rem 1.2rem;
    }
  `;
  document.head.appendChild(style);
}

// ── Render ─────────────────────────────────────────────────────────────────────
export function renderUpdates(containerId = "blogContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  injectUpdateStyles();
  container.innerHTML = "";
  container.classList.add("gi-updates-grid");

  const sorted = [...updates].sort((a, b) => new Date(b.date) - new Date(a.date));
  const limited = sorted.slice(0, 6);

  limited.forEach(update => {
    const cfg = getConfig(update.type);

    const maxVisible = 3;

    const characterTags = update.characters?.length
      ? (() => {
        const visible = update.characters.slice(0, maxVisible);
        const remaining = update.characters.length - maxVisible;

        return visible.map(c =>
          `<span class="gi-update-card__char-tag">${c}</span>`
        ).join("") + (remaining > 0
          ? `<span class="gi-update-card__char-tag">+${remaining}</span>`
          : "");
      })()
      : "";

    const statusBadge = update.status === "active"
      ? `<span class="gi-update-card__status">● Live</span>`
      : "";

    const card = document.createElement("a");
    card.href = `updates-detail.html?id=${update.id}`;
    card.target = "_blank";
    card.className = "gi-update-card";
    card.innerHTML = `
      <div class="gi-update-card__img-wrap">
        <img src="${update.image}" alt="${update.title}" loading="lazy">
        <div class="gi-update-card__img-overlay"></div>
        <span class="gi-update-card__badge" style="color:${cfg.color}">
          <span class="gi-update-card__badge-dot" style="background:${cfg.color}"></span>
          ${cfg.label}
        </span>
        ${statusBadge}
      </div>

      <div class="gi-update-card__body">
        <div class="gi-update-card__meta">
          <span class="gi-update-card__category" style="color:${cfg.color}">${update.category}</span>
          <span class="gi-update-card__date">${formatDate(update.date)}</span>
        </div>

        <h3 class="gi-update-card__title">${update.title}</h3>
        <p class="gi-update-card__desc">${update.description}</p>
      </div>

      <div class="gi-update-card__divider"></div>

      <div class="gi-update-card__body" style="padding-top:0">
        <div class="gi-update-card__footer">
          <div class="gi-update-card__characters">${characterTags}</div>
          <span class="gi-update-card__cta" style="color:${cfg.color}">
            Read Guide <span>→</span>
          </span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ── Search export ──────────────────────────────────────────────────────────────
export function getUpdatesData() {
  return updates.map(item => ({
    ...item,
    type: "update",
    desc: item.description,
    content: item.description,
    image: item.image,
    link: `update.html?id=${item.id}`
  }));
}

// ── Auto-run ───────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderUpdates();
});