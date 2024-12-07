let size = 16;
function getRandomRGBVal() {
  return Math.floor(Math.random() * 256);
}

function renderGrid(size){
	let html = '';
	const width = 960/size;
	for(let i = 0; i < size*size; i++){
		html += `<div class="js-square square" style ="flex: 1 1 ${width}px; width: ${width}px; height: ${width}px; opacity: 1;"></div>`
	}
	document.querySelector('.js-flex-container').innerHTML = html;

	document.querySelectorAll('.js-square').forEach((square)=>{
		square.addEventListener('mouseleave', (event)=>{
			if(!square.classList.contains('hovered')){
				square.style.backgroundColor = `rgb(${getRandomRGBVal()}, ${getRandomRGBVal()}, ${getRandomRGBVal()})`;
				square.classList.add('hovered');
			}
			else{
				square.style.opacity = `${Number(square.style.opacity)-0.1}`;
			}
		})
	});
}

renderGrid(size);


document.querySelector('.js-size-change-button').addEventListener('click', ()=>{
	size = prompt('Choose a size for the new grid!', 0);
	(Number(size) && Number(size) > 0 && Number(size) <= 100) ? renderGrid(Number(size)) : renderGrid(size = 16);
});

document.querySelector('.js-reset-canvas').addEventListener('click', ()=>{
	renderGrid(size);
});