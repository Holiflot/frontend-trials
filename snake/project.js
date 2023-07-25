document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')
  
    let currentSnake = [2,1,0] 
    let score = 0
    let apple = 0;
    const width = 10;
    const height = 10;
    var snakeSpeed = 200; // Yılanın hızını milisaniye cinsinden belirleyin
    var intervalId;
    let counter = 2;
    direction =1;
    //to start, and restart the game
    function startGame() {
      direction = 1;
      currentSnake.forEach(number => {
        squares[number].classList.remove('snake');
      });
      squares[apple].classList.remove('apple');
      currentSnake.forEach(number => {
        squares[number].classList.add('snake');
      });
      randomGenerateApple();
      intervalId = setInterval(moveSnake, snakeSpeed);
    }

    function moveSnake(){
    const tail = currentSnake.pop() //removes last ite of the array and shows it
    squares[tail].classList.remove('snake')  //removes class of snake from the TAIL
    currentSnake.unshift(currentSnake[0] + direction) //gives direction to the head of the array
    console.log(currentSnake);
    currentSnake.forEach(number => {
      squares[number].classList.add('snake');
    });
    //deals with snake getting apple
    if(currentSnake[0] == apple) {
      squares[currentSnake[0]].classList.remove('apple')
      squares[tail].classList.add('snake')
      currentSnake.push(tail)
      randomGenerateApple()
      score++
      scoreDisplay.textContent = score
    }
  }
    function randomGenerateApple(){
      let min = Math.ceil(3);
      let max = Math.floor(height*width-1);
      apple = Math.floor(Math.random() * (max - min + 1)) + min;
      squares[apple].classList.add('apple');
    }
    //assign functions to keycodes
    function control(e) {
      //squares[currentSnake].classList.remove('snake')
  
      if(e.keyCode === 39) {
        direction = 1 //if we press the right arrow on our keyboard, the snake will go right one
      } else if (e.keyCode === 38) {
        direction = -width // if we press the up arrow, the snake will go back ten divs, appearing to go up
      } else if (e.keyCode === 37) {
        direction = -1 // if we press left, the snake will go left one div
      } else if (e.keyCode === 40) {
        direction = +width //if we press down, the snake head will instantly appear in the div ten divs from where you are now
      }
    }
  
    document.addEventListener('keyup', control)
    startBtn.addEventListener('click', startGame)
  })