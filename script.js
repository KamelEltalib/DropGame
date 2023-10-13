let user    = document.querySelector('.user');
let block   = document.querySelector('.block');
let result  = document.querySelector('.result');
let game  = document.querySelector('.game');
let buts    = document.querySelectorAll('.buts button');

let userMoves = 0

function moveLeft() {
      if (userMoves < 250) {
            userMoves = userMoves + 50
      }
      user.style.left = `${userMoves}px`
}

function moveRight() {
      if (userMoves > 0) {
            userMoves = userMoves - 50
      }
      user.style.left = `${userMoves}px`
}

buts[0].addEventListener('click', moveRight)

buts[1].addEventListener('click', moveLeft)

document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
            moveRight()
      }

      if (e.key === 'ArrowRight') {
            moveLeft()
      }
})


setInterval(function () {
      let rend = Math.floor(Math.random() * 6);
      go = rend * 50;
      block.style.left = `${go}px`;
}, 1500)

let resultNum = 0;
let div = document.createElement('div');
div.classList.add('endGame')
document.body.appendChild(div)

setInterval(function () {

      let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
      let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
      let userLeft = parseInt(window.getComputedStyle(user).getPropertyValue('left'));

      if (blockTop > 280 && blockLeft === userLeft) {
            resultNum++
            result.innerHTML = resultNum
      }

      if (blockTop > 300 && blockLeft != userLeft) {
            div.style.display = 'block'
            div.innerHTML = `
            <div>
                  <p>
                  انتهت اللعبة 
                        <br>
                  لديك ${resultNum} نقطة
                  </p>
                  <a href="index.html">اعادة اللعب</a>
            </div>
            `
      }

      if(resultNum > 1000){
            game.style.backgroundColor = 'black';
      }

}, 1)



