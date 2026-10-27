// The complaints box. Kept on this phone only.
const Complaints = (() => {
  const KEY = 'h7-complaints';

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function save(list) {
    localStorage.setItem(KEY, JSON.stringify(list));
  }

  function render() {
    const ul = document.getElementById('complaint-list');
    ul.innerHTML = '';
    const list = load();
    if (!list.length) {
      ul.innerHTML = '<li>No complaints yet. Suspicious.</li>';
      return;
