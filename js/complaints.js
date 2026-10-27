// The complaints box. Kept on this phone only.
const Complaints = (() => {
  const KEY = 'h7-complaints';

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (e) {
      return [];
