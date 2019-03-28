
function checkIfOnline() {
	console.log('beforeIf');
	if (navigator.online) {
		console.log('online')
	} else {
		clearContent();
		addDiamond();
	}
}

function clearContent() {
	let content = document.getElementById('offline-content');
	content.innerHTML = '';
}

function addDiamond() {
	let content = document.getElementById('offline-content');
	let diamondImage = content.createElement('img');
	let diamondPath = 'static/image/diamond_pwa.png';

	diamondImage.classList.add('diamondImage');
	diamondImage.setAttribute('src', diamondPath);
	diamondImage.setAttribute('alt', 'diamond image');

	content.appendChild(diamondImage);
}

checkIfOnline();