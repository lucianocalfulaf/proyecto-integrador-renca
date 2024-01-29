function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill2").style.width = `${value}%`;
    progressBar.querySelector(".progress__text2").textContent = `${value}%`;
  }
  
  const myProgressBar2 = document.querySelector(".progress2");
  
  /* Example */
  updateProgressBar(myProgressBar2, 50)