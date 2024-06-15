(async () => {
	const loading = document.querySelector(
		".flex.justify-center.items-center.h-full",
	);
	const options = {
		threshold: 1,
	};
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (!entry.isIntersecting) {
				setTimeout(() => {
					const divs = document.querySelector(".px-6.pt-4.pb-6 ");
					const label = document.querySelector(
						".flex.justify-between.tracking-wide.text-sm",
					);
					const answers = document.querySelector(
						".grid.grid-cols-1.md\\:grid-cols-2.gap-8.mt-5",
					);
					const arrayAnswers = Array.from(answers.children);

					answers.innerHTML = "";
					divs.innerHTML = "";

					const shuffledAnswers = shuffleArray(arrayAnswers);
					for (const answer of shuffledAnswers) {
						answers.appendChild(answer);
					}

					divs.appendChild(label);
					divs.appendChild(answers);
				}, 200);
			}
		}
	}, options);

	observer.observe(loading);

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
})();
