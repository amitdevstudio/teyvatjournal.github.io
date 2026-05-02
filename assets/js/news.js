export const news = [
  {
    id: 1,
    title: "6.5 5-star Characters",
    desc: "Version 6.6",
    image: "assets/images/banners/6.5.png",
    images: [
      "https://img.game8.co/4460577/0ebce957da58b7d4b57e448f7b6e5373.png/show"
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    title: "6.5 Phase 1 5-star Characters",
    desc: "Version 6.6",
    image: "assets/images/banners/linnea-chasca.png",
    images: [
      "https://img.game8.co/4460577/0ebce957da58b7d4b57e448f7b6e5373.png/show"
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 3,
    title: "6.5 Phase 2 5-star Characters",
    desc: "Version 6.6",
    image: "assets/images/banners/nefer-lauma.png",
    images: [
      "https://img.game8.co/4460577/0ebce957da58b7d4b57e448f7b6e5373.png/show"
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    title: "6.5 Phase 2 Fontaine Chronicled Wish",
    desc: "Version 6.6",
    image: "assets/images/banners/fontaine_chronicled_wish.png",
    images: [
      "https://img.game8.co/4460577/0ebce957da58b7d4b57e448f7b6e5373.png/show"
    ],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
];

// ── Inject shared styles once ──────────────────────────────────────────────────
function injectNewsStyles() {
  if (document.getElementById("gi-news-styles")) return;
  const style = document.createElement("style");
  style.id = "gi-news-styles";
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600&display=swap');

    .gi-news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
      font-family: 'Raleway', sans-serif;
    }

    /* First card spans 2 columns on wide screens */
    @media (min-width: 900px) {
      .gi-news-card--featured {
        grid-column: span 2;
      }

      .gi-news-card--featured .gi-news-card__img-wrap {
        height: 260px;
      }

      .gi-news-card--featured .gi-news-card__title {
        font-size: 1.25rem;
      }
    }

    .gi-news-card {
      position: relative;
      background: linear-gradient(155deg, rgba(255,255,255,0.045), rgba(255,255,255,0.012));
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

    .gi-news-card:hover {
      transform: translateY(-5px) scale(1.01);
      border-color: rgba(240,192,96,0.22);
      box-shadow: 0 14px 44px rgba(0,0,0,0.5), 0 0 0 1px rgba(240,192,96,0.1);
    }

    .gi-news-card__img-wrap {
      position: relative;
      height: 200px;
      overflow: hidden;
      flex-shrink: 0;
    }

    .gi-news-card__img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.6s cubic-bezier(.22,.68,0,1.2);
    }

    .gi-news-card:hover .gi-news-card__img-wrap img {
      transform: scale(1.07);
    }

    /* Dark gradient over image */
    .gi-news-card__img-wrap::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(8,8,20,0.9) 0%,
        rgba(8,8,20,0.2) 50%,
        transparent 100%
      );
      pointer-events: none;
    }

    /* "NEW" flash badge on featured card */
    .gi-news-card__new-badge {
      position: absolute;
      top: 14px;
      right: 14px;
      z-index: 2;
      padding: 3px 9px;
      border-radius: 4px;
      background: #f0c060;
      color: #1a0f00;
      font-size: 0.63rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    /* Version label bottom-left of image */
    .gi-news-card__version {
      position: absolute;
      bottom: 12px;
      left: 14px;
      z-index: 2;
      font-size: 0.68rem;
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .gi-news-card__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 1.2rem 1.4rem 1.4rem;
    }

    .gi-news-card__title {
      font-family: 'Cinzel', serif;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      margin: 0 0 0.45rem;
      line-height: 1.4;
      transition: color 0.25s ease;
    }

    .gi-news-card:hover .gi-news-card__title {
      color: #f0c060;
    }

    .gi-news-card__desc {
      font-size: 0.82rem;
      color: rgba(255,255,255,0.5);
      line-height: 1.6;
      margin: 0 0 0.65rem;
    }

    .gi-news-card__preview {
      font-size: 0.79rem;
      color: rgba(255,255,255,0.3);
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex: 1;
      margin: 0 0 1.1rem;
    }

    .gi-news-card__sep {
      height: 1px;
      background: linear-gradient(to right, rgba(255,255,255,0.06), transparent);
      margin-bottom: 1rem;
    }

    .gi-news-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .gi-news-card__img-count {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 0.7rem;
      color: rgba(255,255,255,0.3);
      font-weight: 500;
    }

    .gi-news-card__img-count svg {
      opacity: 0.5;
    }

    .gi-news-card__cta {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #f0c060;
      opacity: 0.65;
      transition: gap 0.25s, opacity 0.25s;
    }

    .gi-news-card:hover .gi-news-card__cta {
      gap: 9px;
      opacity: 1;
    }

    /* Top accent line */
    .gi-news-card::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(to right, #f0c060, transparent);
      opacity: 0;
      transition: opacity 0.35s ease;
    }

    .gi-news-card:hover::after {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);
}

// ── Helper: extract version from title ────────────────────────────────────────
function extractVersion(title) {
  const match = title.match(/\d+\.\d+/);
  return match ? `Version ${match[0]}` : null;
}

// ── Render ─────────────────────────────────────────────────────────────────────
export function renderNewsCards(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  injectNewsStyles();
  container.classList.add("gi-news-grid");

  const sorted = [...news].sort((a, b) => b.id - a.id);
  const isMobile = window.innerWidth < 768;
  const limit = isMobile ? 4 : 3;
  const limited = sorted.slice(0, limit);

  container.innerHTML = limited.map((item, index) => {
    const isFeatured = index === 0;
    const version = extractVersion(item.title);
    const imgCount = item.images?.length ?? 1;
    const previewText = item.content.replace(/\n+/g, " ").trim();

    return `
      <a href="news-detail.html?id=${item.id}" target="_blank"
         class="gi-news-card${isFeatured ? " gi-news-card--featured" : ""}">

        <div class="gi-news-card__img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          ${isFeatured ? `<span class="gi-news-card__new-badge">Latest</span>` : ""}
          ${version ? `<span class="gi-news-card__version">${version}</span>` : ""}
        </div>

        <div class="gi-news-card__body">
          <h3 class="gi-news-card__title">${item.title}</h3>
          <p class="gi-news-card__desc">${item.desc}</p>
          <p class="gi-news-card__preview">${previewText}</p>

          <div class="gi-news-card__sep"></div>

          <div class="gi-news-card__footer">
            <span class="gi-news-card__img-count">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              ${imgCount} image${imgCount !== 1 ? "s" : ""}
            </span>
            <span class="gi-news-card__cta">
              Read More <span>→</span>
            </span>
          </div>
        </div>

      </a>
    `;
  }).join("");
}