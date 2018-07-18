window.onload = function() {
	var particles = Particles.init({
		selector: '.background',
	  color: 'lightgray',
		sizeVariations: 5,
		maxParticles: 500
	});
}

document.querySelectorAll('.carousel-navigation').forEach((elem) => {
	elem.onclick = function(){console.log(window.location.reload())};
})
