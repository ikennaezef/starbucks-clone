const tabs = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content-item');
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.links-wrapper');

// For the menu button
menuBtn.addEventListener('click', ()=> {
	navMenu.classList.toggle('show');
})


// For the favorites tab
tabs.forEach(tab => {
	tab.addEventListener('click', switchTab);
})

function switchTab() {
	removeBorder();
	removeShow();
	this.classList.add('tab-active');
	document.querySelector(`#${this.id}-content`).classList.add('show');
}

function removeBorder() {
	tabs.forEach(tab => tab.classList.remove('tab-active'));
}

function removeShow() {
	tabContents.forEach(tabContent => tabContent.classList.remove('show'));
}