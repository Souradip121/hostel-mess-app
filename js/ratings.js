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
