chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// init obj for storing app data
			let app = {
				speed: 4000
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
						if (window.location.href.indexOf('tags') !== -1) {
							btn.onclick = automation.hashtag;
						} else {
							btn.onclick = automation.homepage;
						}
						container.insertBefore(btn, container.firstChild);
					}
				},
				all: () => {
					uis.btn();
				}
			}

			//automation processes
			const automation = {
				hashtag: () => {
					const gallery = document.querySelector('div._9AhH0');
					gallery.click();
					const interval = setInterval(() => {
						const heart = document.querySelector('button.coreSpriteHeartOpen'),
							comment = document.querySelector('textarea.Ypffh'),
							arrow = document.querySelector('a.coreSpriteRightPaginationArrow'),
							test = document.querySelector('span.glyphsSpriteHeart__outline__24__grey_9');
						if (!arrow) {
							clearInterval(interval);
						}
						if (heart && test) {
							heart.click();
						}
						if (comment) {
							comment.value = '⏣ I really like your work!';
						}
						if (arrow) {
							arrow.click();
						}
					}, app.speed);
				}
				/*homepage: () => {
					const interval = setInterval(() => {
						const hearts = document.querySelectorAll('button.coreSpriteHeartOpen'),
							count = hearts.length;
						let heart = null;
						do {
							heart = hearts[0];
							if (heart.childNodes[0].classList.contains('glyphsSpriteHeart__outline__24__grey_9')) {
								hearts.onclick = 
								console.log(true);
							}
							console.log(heart.childNodes[0]);
						} while (!heart);
					}, app.speed);
				}*/
			}

			// track all clicks to inject uis
			document.addEventListener('click', uis.all);

			// init ui build when app loads
			uis.all();

		}
	}, 10);
});