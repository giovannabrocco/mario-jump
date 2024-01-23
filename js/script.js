
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
//passar o css para a imagem

const jump  = () => {
    mario.classList.add('jump')
//acessar o class, e adicionar a classe jump

setTimeout(() => {
    mario.classList.remove('jump')
    }, 500);
    //vou passar função e tempo, onde em determinado segundos aplico a função
}
//toda vez que eu pressionar uma tecla, ele adiciona o jump

 
//loop para verificar se perdeu ou não (mario chegou a 120px left)
const loop = setInterval(() => {
    console.log();
    const pipePosition = pipe.offsetLeft;
        //pegar valor da esquerda, posição do tubo
         //propriedade: deslocamento esquerdo
         
         const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        //pegar propriedade bottom
        // o + está convertendo para número


       
    if(pipePosition <= 110 && pipePosition > 0 && marioPosition < 70 )
    {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
 // quero que a propriedade do left seja o valor de quando encostou no tubo
        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
 
        clearInterval(loop)
    }

}, 10)


document.addEventListener('keydown', jump);
// escutador de eventos - quando a tecla baixar no teclado
// será executado uma ação



  