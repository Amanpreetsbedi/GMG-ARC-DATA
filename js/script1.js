window.onscroll = function() {
 fix_func()
};


const container = document.querySelector('.container');


function fix_func() {
 if (window.pageYOffset > nav_fix){  
	 tab.classList.add('fixed');	
	 container.classList.add('if_fixed_container');
 }else {	
	 tab.classList.remove('fixed');  
	 container.classList.remove('if_fixed_container');
 }
}

const menuButton = document.querySelector('button');
const mobileMenu = document.querySelector('.tab');
const mobileMenuClose = document.querySelector('.close');
const dim = document.querySelector('.dim');

function showMenu() {
	mobileMenu.style.transition = "all .2s";  
	mobileMenu.classList.add('show');
	dim.classList.add('dim_show');
}

function hideMenu() {
	mobileMenu.style.transition = "all .2s";  
	mobileMenu.classList.remove('show');
	dim.classList.remove('dim_show');
}

menuButton.addEventListener('click', showMenu);
mobileMenuClose.addEventListener('click', hideMenu);
dim.addEventListener('click', hideMenu);