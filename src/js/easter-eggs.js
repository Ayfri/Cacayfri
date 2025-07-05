// Random console messages every 15s
typeof setInterval === 'function' && setInterval(() => {
  const msgs = ["💩 Chillin' with the trolls", "🐒 Go bananas!", "🤖 AI detection: poop"];
  console.log(msgs[Math.floor(Math.random() * msgs.length)]);
}, 15000);

// Prevent right-click poop
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  alert('No pooping there!');
});

// Double-click article highlight
document.body.addEventListener('dblclick', e => {
  const art = e.target.closest('article');
  if (art) {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    art.style.transition = 'background-color 0.5s';
    art.style.backgroundColor = color;
    setTimeout(() => art.style.backgroundColor = '', 1000);
  }
});

// Easter egg: press 'p' key
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'p') {
    alert('💩 You pressed P for Poop!');
  }
});
