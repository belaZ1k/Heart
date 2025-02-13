document.addEventListener("DOMContentLoaded", function() {
    let sound = document.getElementById("heartbeat-sound");
    let body = document.body;
    let container = document.querySelector(".container");
    let heart = document.querySelector(".heart");
    let text = document.querySelector(".pulse-text");
    let chainBall = document.getElementById("chain-ball");
  
    let isOn = false;
  
    function toggleHeart() {
      isOn = !isOn;
  
      if (isOn) {
        body.classList.add("active-body");
        container.classList.add("active-container");
        heart.classList.add("active-heart");
        text.classList.add("active-text");
        sound.play();
      } else {
        body.classList.remove("active-body");
        container.classList.remove("active-container");
        heart.classList.remove("active-heart");
        text.classList.remove("active-text");
        sound.pause();
        sound.currentTime = 0;
      }
    }
  
    // При клике на шарик цепочки воспроизводится bounce-анимация и переключается состояние
    chainBall.addEventListener("click", function() {
      chainBall.classList.add("bounce");
      chainBall.addEventListener("animationend", function() {
        chainBall.classList.remove("bounce");
      }, { once: true });
      toggleHeart();
    });
  });  