import Router from "next/router";
import NProgress from "nprogress";

const delay = 250;
let activeRequests = 0;
let timer: ReturnType<typeof setTimeout> = setTimeout(() => "", 250);
let state: "loading" | "stop";

function load() {
	if (state === "loading") return;
	state = "loading";

	// only show progress bar if it takes longer than the delay
	timer = setTimeout(() => {
		NProgress.start();
	}, delay);
}

function stop() {
	if (activeRequests > 0) return;

	state = "stop";

	clearTimeout(timer);
	NProgress.done();
}

Router.events.on("routeChangeStart", load);
Router.events.on("routeChangeComplete", stop);
Router.events.on("routeChangeError", stop);

const originalFetch = window.fetch;

window.fetch = async (...args) => {
	if (activeRequests === 0) load();

	activeRequests++;

	try {
		const response = await originalFetch(...args);
		return response;
	} catch (error) {
		return Promise.reject(error);
	} finally {
		activeRequests -= 1;
		if (activeRequests === 0) {
			stop();
		}
	}
};

export default function NProgressBar() {
	return null;
}
