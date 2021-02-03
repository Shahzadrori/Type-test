const message = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let starttime, endtime;
btn.addEventListener('click', () => {
  if(this.innerText == 'Start'){
      typewords.disabled = false;
      playit
  }
})