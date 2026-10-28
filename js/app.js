// Hostel 7 Mess: today's menu, the week, ratings and complaints.
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MEALS = ['breakfast', 'lunch', 'snacks', 'dinner'];
const TIMES = {
  breakfast: '7:30 - 9:30 am',
  lunch: '12:30 - 2:30 pm',
  snacks: '5:00 - 6:00 pm',
  dinner: '8:00 - 10:00 pm',
};

let menu = null;
let pickedDay = new Date().getDay();

async function loadMenu() {
  const res = await fetch('data/menu.json');
  if (!res.ok) throw new Error('menu not found');
  return res.json();
}

function title(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function mealCard(day, meal) {
  const items = menu[DAYS[day]][meal] || [];
  const card = document.createElement('article');
  card.className = 'meal';
  const key = `${DAYS[day]}-${meal}`;
  card.innerHTML = `
    <h3>${title(meal)}</h3>
    <div class="time">${TIMES[meal]}</div>
    <ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>
  `;
  card.appendChild(Ratings.stars(key));
  card.appendChild(Ratings.average(key));
  return card;
}

function renderToday() {
  const today = new Date().getDay();
  document.getElementById('today-title').textContent = `Today, ${DAYS[today]}`;
