function playSound(e) {
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    const key = document.querySelector(`div[data-key = '${e.keyCode}']`);
    if (!audio) return; // stops the function
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add("playing");
  }
  
function removeTransition(e) {
    const key = document.querySelector(`div[data-key = '${e.keyCode}']`);
  
    if (key) {
        requestAnimationFrame(() =>
              requestAnimationFrame(() => key.classList.remove("playing"))
            );
    }
  }
  window.addEventListener("keyup", removeTransition);
  window.addEventListener("keydown", playSound);
  const keys = document.querySelectorAll(".key");
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  