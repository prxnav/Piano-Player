function playSound(e) {  //step2
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    const key = document.querySelector(`div[data-key = '${e.keyCode}']`);
    if (!audio) return; // stops the function
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add("playing");
  }
  
function removeTransition(e) {  //step5
    const key = document.querySelector(`div[data-key = '${e.keyCode}']`);
  
    if (key) {
        requestAnimationFrame(() =>
              requestAnimationFrame(() => key.classList.remove("playing"))
            );
    }
  }
  window.addEventListener("keyup", removeTransition); //step3
  window.addEventListener("keydown", playSound); //step1 
  const keys = document.querySelectorAll(".key"); //step4
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  