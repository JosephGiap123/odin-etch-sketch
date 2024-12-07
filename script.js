function renderGrid(size){
	let html = '';
	const width = 960/size;
	for(let i = 0; i < size*size; i++){
		html += `<div class="js-square square" style ="flex: 1 1 ${width}px; width: ${width}px; height: ${width}px;"></div>`
	}
	document.querySelector('.js-flex-container').innerHTML = html;

	document.querySelectorAll('.js-square').forEach((square)=>{
		square.addEventListener('mouseover', ()=>{
			square.classList.add('hovered');
		})
	});
}

renderGrid(16);


document.querySelector('.js-size-change-button').addEventListener('click', ()=>{
	let size = prompt('Choose a size for the new grid!', 0);
	(Number(size) && Number(size) > 0 && Number(size) <= 100) ? renderGrid(Number(size)) : renderGrid(16);
});
