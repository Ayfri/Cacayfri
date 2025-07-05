import './style.css';

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
