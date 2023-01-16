var bird = document.querySelector('.bird');

var pipes = document.querySelectorAll('.pipe');

var score = document.querySelector('.score');

document.addEventListener('keydown', function(e) {

  if(e.code === 'Space') {

    bird.style.top = bird.offsetTop - 50 + 'px';

  }

});

var pipeInterval = setInterval(function() {

  for(var i = 0; i < pipes.length; i++) {

    pipes[i].style.right = pipes[i].offsetLeft - 2 + 'px';

    if(pipes[i].offsetLeft < -50) {

      pipes[i].style.right = '100%';

      pipes[i].style.bottom = Math.floor(Math.random() * 200) + 'px';

      score.innerHTML = parseInt(score.innerHTML) + 1;

    }

    if(checkCollision(bird, pipes[i])) {

      clearInterval(pipeInterval);

      alert('Game Over!');

    }

  }

}, 20);

function checkCollision(bird, pipe) {

  return !(

    bird.offsetLeft + bird.offsetWidth < pipe.offsetLeft ||

    bird.offsetLeft > pipe.offsetLeft + pipe.offsetWidth ||

    bird.offsetTop + bird.offsetHeight < pipe.offsetTop ||

    bird.offsetTop > pipe.offsetTop + pipe.offsetHeight

  );

}

