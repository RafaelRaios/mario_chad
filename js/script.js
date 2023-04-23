const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.05; 
}

function jump () {
    mario.classList.add('jump');
    mario.src = './images/jump.png';
    mario.style.scale = '65%';
    

    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src = 'https://i.gifer.com/33HU.gif';
        mario.style.scale = '100%';
    },
    1000);
}


const loop = setInterval( () => {
    const pipe_location = pipe.offsetLeft;
    const mario_location = +window.getComputedStyle(mario).bottom.replace('px', '');
    //console.log(pipe_location);

    if(pipe_location <= 80 && pipe_location > 0 && mario_location < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipe_location}px`;


        mario.src = './images/dead.png';
        mario.style.scale = '50%';
        mario.style.marginLeft = '70px';
        mario.classList.add('dead');
        
    
        clearInterval(loop);
        //setTimeout(() => {
            //mario.classList.remove('jump');
            //mario.src = 'https://i.gifer.com/33HU.gif';
            //mario.style.scale = '100%';
        //},1000);
    }

}, 10);

document.addEventListener('keydown', jump);

