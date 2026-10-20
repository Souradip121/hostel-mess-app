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
