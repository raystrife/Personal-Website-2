
// $(document).ready(function() {
	const navToggle = document.querySelector('.nav-toggle');
	const navLinks = document.querySelectorAll('.nav__link')

	navToggle.addEventListener('click', () => {
		document.body.classList.toggle('nav-open');
	})

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			document.body.classList.remove('nav-open');
		})
	})

	async function typeSentence(sentence, eleRef, delay = 100) {
		const letters = sentence.split("");
		let i = 0;
		while (i < letters.length) {
			await waitForMs(delay);
			$(eleRef).append(letters[i]);
			i++
		}
		return;
	}

	async function deleteSentence(eleRef) {
		const sentence = $(eleRef).html();
		const letters = sentence.split("");
		let i = 0;
		while (letters.length > 0) {
			await waitForMs(100)
			letters.pop();
			$(eleRef).html(letters.join(""));
		}
	}

	function waitForMs(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	const titleList = ["QA Engineer", "Software Developer", "Food Enthusiast"]

	async function infiniteGenerateTitles(titleList, eleRef) {
		var i = 0;
		while(true) {
			await typeSentence(titleList[i], eleRef);
			await waitForMs(1500);
			await deleteSentence(eleRef)
			await waitForMs(500);
			i++
			if (i >= titleList.length) {
				i = 0;
			}
		}
	}

	infiniteGenerateTitles(titleList, "#sentence");
// })
