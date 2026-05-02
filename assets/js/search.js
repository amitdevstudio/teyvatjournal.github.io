import { news } from './news.js';
import { guides, getGuidesData } from './guides.js';
import { updates } from './updates.js';
import { wallpapers } from './wallpaper.js';

// 👉 Combine all data in ONE clean structure
const allData = [
  ...news.map(item => ({ ...item, type: 'news' })),
  ...getGuidesData(),
  ...updates.map(item => ({ ...item, type: 'update' })),
  ...wallpapers.map(item => ({ ...item, type: 'wallpaper' }))
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('searchResults');

// 👉 Search logic
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    resultsContainer.classList.add('hidden');
    resultsContainer.innerHTML = '';
    return;
  }

  const results = allData.filter(item =>
    (item.title && item.title.toLowerCase().includes(query)) ||
    (item.desc && item.desc.toLowerCase().includes(query)) ||
    (item.content && item.content.toLowerCase().includes(query))
  );

  if (results.length === 0) {
    resultsContainer.classList.remove('hidden');
    resultsContainer.innerHTML = `
      <p class="text-gray-400 text-center py-6">No results found</p>
    `;
    return;
  }

  resultsContainer.classList.remove('hidden');

  resultsContainer.innerHTML = results.map(item => `
    <a href="${
      item.type === 'news'
        ? `news-detail.html?id=${item.id}`
        : item.type === 'guide'
        ? `guide-detail.html?id=${item.id}`   /* FIXED (was guide-detail.html) */
        : item.type === 'update'
        ? `update.html?id=${item.id}`
        : `wallpaper-detail.html?id=${item.id}`
    }"
    class="flex gap-4 p-4 hover:bg-white/10 transition items-center border-b border-white/5">

      <img src="${item.image}" class="w-20 h-14 object-cover rounded-lg flex-shrink-0">

      <div>
        <span class="text-xs text-yellow-400 uppercase tracking-wide">
          ${item.type}
        </span>

        <h3 class="text-sm font-semibold text-white line-clamp-1">
          ${item.title}
        </h3>

        <p class="text-xs text-gray-400 line-clamp-1">
          ${item.desc ?? ''}
        </p>
      </div>

    </a>
  `).join('');
});

// 👉 Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
    resultsContainer.classList.add('hidden');
  }
});