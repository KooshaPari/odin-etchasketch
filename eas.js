function etchsketch(){
    while (graphContainer.firstChild) {
        graphContainer.removeChild(graphContainer.firstChild);
    }
    graphBuilder(16);
    while(true){
        const pixels = document.querySelectorAll('#game div');
        pixels.forEach((pixel) => { pixel.addEventListener('mouseover', function(){ pixel.style.backgroundColor = colorPicker() }); });
        pixels.forEach((pixel) => { pixel.addEventListener('onmouseover', function(){ pixel.style.border = '15px solid white' }); });
        break;
        
    }
}
function etchsketchCus(){
    while (graphContainer.firstChild) {
        graphContainer.removeChild(graphContainer.firstChild);
    }
    graphBuilderCus();
    while(true){
        const pixels = document.querySelectorAll('#game div');
        pixels.forEach((pixel) => { pixel.addEventListener('mouseover', function(){ pixel.style.backgroundColor = colorPicker(); }); });
        break;
    }
}
const graphContainer = document.querySelector('#game');
const pixel = document.createElement('div'); pixel.style.minWidth = '20px'; 
pixel.style.minHeight = '20px'; pixel.style.border='1px solid black'; pixel.style.backgroundColor = 'gray';

function graphBuilder(){
    let size =16;
    console.log('graphBuilder ran for ' + size + 'nodes');
    graphContainer.style.width = '500px';
    const pixelSize = graphContainer.offsetWidth / size; // calculate pixelSize first
    console.log(pixelSize);
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = pixel.style.width;
    aW=pixel.style.width;
    aH=pixel.style.height;
    console.log('WIDTH: ' + aW + ' HEIGHT: ' + aH)
    pixel.style.boxSizing = 'border-box'; // add this line
    graphContainer.style.width = `${pixelSize * size}px`; // set the container width based on pixelSize
    for(let i = 0; i<size*size; i++){
        graphContainer.appendChild(pixel.cloneNode());
    }
}
function graphBuilderCus(){
    let size = prompt('How many nodes per side?');
    console.log('graphBuilder ran for ' + size + 'nodes');
    graphContainer.style.width = '500px';
    const pixelSize = graphContainer.offsetWidth / size; // calculate pixelSize first
    console.log(pixelSize);
    pixel.style.width = `${pixelSize}px`;
    pixel.style.height = pixel.style.width;
    aW=pixel.style.width;
    aH=pixel.style.height;
    console.log('WIDTH: ' + aW + ' HEIGHT: ' + aH)
    pixel.style.boxSizing = 'border-box'; // add this line
    graphContainer.style.width = `${pixelSize * size}px`; // set the container width based on pixelSize
    for(let i = 0; i<size*size; i++){
        graphContainer.appendChild(pixel.cloneNode());
    }
}


const sBTN = document.querySelector('#strt');
const rBTN = document.querySelector('#resize');

sBTN.addEventListener('click',etchsketch);
rBTN.addEventListener('click',etchsketchCus);

function colorPicker(){
    let rVal =Math.floor(Math.random()*255).toString();
    let gVal =Math.floor(Math.random()*255).toString();
    let bVal =Math.floor(Math.random()*255).toString();
    return `rgb(${rVal},${gVal},${bVal})`;
}