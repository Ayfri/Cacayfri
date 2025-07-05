import './style.css';
import './css/layout.css';
import './css/components.css';

import './js/easter-eggs.js';
import { evaluateQuiz } from './js/quiz.js';
import { submitStory } from './js/submissions.js';
import { subscribeNewsletter } from './js/newsletter.js';

// Script for Cacayfri

document.addEventListener('DOMContentLoaded', function() {
	const poopsOfTheDay = [
		'Bristol Type 1: Hard, separate lumps, like nuts. A pointillist masterpiece, if you\'re into that kind of thing.',
		'Bristol Type 2: Sausage-shaped, but lumpy. The work of a sculptor with questionable taste.',
		'Bristol Type 3: Like a sausage but with cracks on its surface. Rustic pottery for the discerning connoisseur.',
		'Bristol Type 4: Like a sausage or snake, smooth and soft. Classical perfection for the boring type.',
		'Bristol Type 5: Soft blobs with clear-cut edges. The easy-going avant-garde. So uninspired.',
		'Bristol Type 6: Fluffy pieces with ragged edges, a mushy stool. An abstract expressionist piece for amateurs.',
		'Bristol Type 7: Watery, no solid pieces. Entirely liquid. The watercolor of digestion, or just a bad meal.'
	];

	const poopElement = document.getElementById('poop-of-the-day');
	if (poopElement) {
		const randomIndex = Math.floor(Math.random() * poopsOfTheDay.length);
		poopElement.textContent = poopsOfTheDay[randomIndex];
	}

	// Extra trolling for the curious user
	console.log('%cStop inspecting the code, you filthy dev.', 'color: brown; font-size: 20px');

	// Randomly annoy on clicks
	document.body.addEventListener('click', function() {
		const insults = [
			'\u{1F4A9} Stop poking around, it\'s just poop.',
			'You really clicked that? Bold move.',
			'Congratulations, you clicked literally nothing of value.'
		];
		if (Math.random() < 0.25) {
			alert(insults[Math.floor(Math.random() * insults.length)]);
		}
	});

	// Easter egg: press "f" to flush
	document.addEventListener('keydown', function(e) {
		if (e.key.toLowerCase() === 'f') {
			alert('💩 Flushed! But the smell remains.');
		}
	});
});

// Attach event handlers
const quizBtn = document.querySelector('#poop-quiz button');
if (quizBtn) quizBtn.addEventListener('click', evaluateQuiz);

const submitBtn = document.querySelector('#user-submissions button');
if (submitBtn) submitBtn.addEventListener('click', submitStory);

const newsletterBtn = document.querySelector('#newsletter-form button');
if (newsletterBtn) newsletterBtn.addEventListener('click', subscribeNewsletter);

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
		const color = '#' + Math.floor(Math.random()*16777215).toString(16);
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
