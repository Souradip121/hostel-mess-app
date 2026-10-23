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
