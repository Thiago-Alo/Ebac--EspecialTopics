
function dragStart(event){

    console.log(event.dataTransfer);
    event.dataTransfer.setData('text/plain', event.target.id);
    event.currentTarget.style.backgroundColor = 'gray';
}

function dragOver(event){
    event.preventDefault();
}

function drop(event){
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event.dataTransfer.clearData();
}

// window.addEventListener('DOMContentLoaded', () => {
//     const drag = document.querySelector('.draggable');

//     drag.addEventListener('dragstart', dragStart);
// })


// CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

//RESIZE
window.addEventListener('resize', function(){
    if(this.window.innerWidth < 620){
        console.log('SMARTPHONE')
    }else if(this.window.innerWidth < 920){
        console.log('TABLET')
    }else{
        console.log('DESKTOP')
    }

    // console.log('redimensionou para = ' + this.window.innerWidth);
})