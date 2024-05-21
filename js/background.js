const QUIZ_URL = "https://ibm-cloud-prep.yourlearning.ibm.com/quizzes/";
const SECTION_QUIZ_PATH = "/section-quiz";
const CERTIFICATION_QUIZ_PATH = "/quiz";

chrome.tabs.onUpdated.addListener((_tabId, changeInfo, tab) => {
	if (changeInfo.status === "complete" && isQuizUrl(tab.url)) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ["js/content-script.js"],
		});
	}
});

function isQuizUrl(url) {
	return (
		url.startsWith(QUIZ_URL) ||
		url.endsWith(SECTION_QUIZ_PATH) ||
		url.endsWith(CERTIFICATION_QUIZ_PATH)
	);
}
