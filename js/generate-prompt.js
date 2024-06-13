(async () => {
	const ABCD = ["A", "B", "C", "D"];

	const question = document.querySelector(
		".min-h-40.my-7.p-6.pb-8.bg-white.text-lg.border.border-light-blue-darkest",
	);
	const answers = document.querySelectorAll(
		".pointer-events-none.text-center.text-base.font-medium",
	);

	const choices = ABCD.slice(0, answers.length).join(", ");
	let prompt = `次の問題の回答は${choices}のうち、どれでしょうか。回答に対する解説となぜ他の回答が誤りなのかを含めて日本語で教えてください。\n\n`;
	prompt += `問題文：\n${question.innerHTML}\n\n`;
	for (const [index, answer] of Object.entries(answers)) {
		prompt += `${ABCD[index]}. ${answer.innerHTML}\n`;
	}

	navigator.clipboard.writeText(prompt).then(
		() => {
			console.log("promptの作成に成功しました。");
		},
		() => {
			console.log("promptの作成に失敗しました。");
		},
	);
})();
