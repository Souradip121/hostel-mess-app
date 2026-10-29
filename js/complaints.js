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
    }
    list.slice().reverse().forEach((c) => {
      const li = document.createElement('li');
      const when = new Date(c.at).toLocaleString();
      li.innerHTML = `<div class="meta">${c.meal} · ${when}</div>`;
      const p = document.createElement('p');
      p.textContent = c.text;
      li.appendChild(p);
      ul.appendChild(li);
    });
  }
