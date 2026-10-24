// Star ratings for each meal, saved in localStorage.
const Ratings = (() => {
  const KEY = 'h7-ratings';

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function save(all) {
    localStorage.setItem(KEY, JSON.stringify(all));
  }

  function get(mealKey) {
    return load()[mealKey] || [];
  }

  function add(mealKey, value) {
    const all = load();
    all[mealKey] = (all[mealKey] || []).concat(value);
    save(all);
  }

  function stars(mealKey) {
    const row = document.createElement('div');
    row.className = 'stars';
    const mine = get(mealKey).slice(-1)[0] || 0;
    for (let i = 1; i <= 5; i++) {
      const s = document.createElement('button');
      s.className = 'star' + (i <= mine ? ' on' : '');
      s.textContent = '★';
      s.setAttribute('aria-label', `${i} star${i > 1 ? 's' : ''}`);
      s.addEventListener('click', () => {
        add(mealKey, i);
        row.querySelectorAll('.star').forEach((x, j) => x.classList.toggle('on', j < i));
        const avg = row.parentElement.querySelector('.avg');
        if (avg) avg.replaceWith(average(mealKey));
      });
      row.appendChild(s);
    }
    return row;
  }

  function average(mealKey) {
    const list = get(mealKey);
    const el = document.createElement('div');
    el.className = 'avg';
    if (!list.length) {
      el.textContent = 'No ratings yet. Be the first.';
      return el;
    }
    const avg = list.reduce((a, b) => a + b, 0) / list.length;
    el.textContent = `${avg.toFixed(1)} from ${list.length} rating${list.length > 1 ? 's' : ''}`;
    return el;
  }

  return { stars, average };
})();
