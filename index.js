const message = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let starttime, endtime;
const setofwords = [
    'My name is Shahzad and I live in Fasialabad.',
    'Hope that it is for you to understand Javascript',
    'If You wana get better then start understanding'
]

var playit= () => {
    let random = Math.floor (Math.random()*setofwords.length);
    message.innerHTML = setofwords[random];
    let date = new Date();
    starttime=date.getTime();
    btn.innerHTML = 'Done'
}


btn.addEventListener('click', function () {
  if(this.innerText == 'Start'){
      typewords.disabled = false;
      playit();
  }else if(this.innerHTML = 'Done'){
      typewords.disabled = true;
      btn.innerHTML= 'Start';
      endtime();
  }
})