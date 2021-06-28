var btnAbrirPopup12 = document.getElementById('btn-abrir-popup12'),
	overlay12 = document.getElementById('overlay12'),
	popup12 = document.getElementById('popup12'),
	btnCerrarPopup12 = document.getElementById('btn-cerrar-popup12');

btnAbrirPopup12.addEventListener('click', function(){
	overlay12.classList.add('active');
	popup12.classList.add('active');
});
btnCerrarPopup12.addEventListener('click', function(){
	overlay12.classList.remove('active');
	popup12.classList.remove('active');
});

var btnAbrirPopup13 = document.getElementById('btn-abrir-popup13'),
	overlay13 = document.getElementById('overlay13'),
	popup13 = document.getElementById('popup13'),
	btnCerrarPopup13 = document.getElementById('btn-cerrar-popup13');

btnAbrirPopup13.addEventListener('click', function(){
	overlay13.classList.add('active');
	popup13.classList.add('active');
});
btnCerrarPopup13.addEventListener('click', function(){
	overlay13.classList.remove('active');
	popup13.classList.remove('active');
});