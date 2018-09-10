chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// init obj for storing app data
			let app = {
				url: window.location.href
			}

			// build operations for uis
			const uis = {
				btn: () => {
					const container = document.querySelector('#react-root > section > main'),
						id = 'im-btn',
						btnRef = document.getElementById(id);
					if (container && !btnRef) {
						let btn = document.createElement('button');
						btn.setAttribute('id', id);
						btn.innerText = 'Like Posts';
						btn.style.margin = '25px auto 0px auto';
						btn.style.width = '250px';
						container.insertBefore(btn, container.firstChild);
					}
				},
				all: () => {
					uis.btn();
				}
			}

			// track all clicks to inject uis
			document.addEventListener('click', uis.all);

			// init ui build when app loads
			uis.all();

		}
	}, 10);
});