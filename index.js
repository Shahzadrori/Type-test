const message = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let starttime, endtime;
const setofwords = [
    'My name is Shahzad and I live in Fasialabad.',
    'Hope that it is for you to understand Javascript',
    'If You wana get better then start understanding'
];
const wordcounter = (str) =>{
    let response =  str.split(" ").length;
    return response;
}


var playit= () => {
    let random = Math.floor (Math.random()*setofwords.length);
    message.innerHTML = setofwords[random];
    let date = new Date();
    starttime=date.getTime();
    btn.innerHTML = 'Done'
}

var endit = ()=>{
    let date = new Date();
    endtime=date.getTime();
    let totaltime = ((endtime - starttime)/1000);
    let totstring = typewords.value;
    let wordCount = wordcounter(totstring);
    let speed = Math.round((wordCount / totaltime) * 60 );
    // finalmsg += Comparewords(message.innerHTML,totstring);
    let finalmsg = 'You typed at ' + speed + ' words per minute';
    message.innerHTML = finalmsg;
    finalmsg += Comparewords(message.innerHTML,totstring);
}
const Comparewords = (str1,str2)=>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;

    word1.forEach(function (item ,index){
        if(item == word2[index]){
            cnt++;
        }
    })
        let errorwords = (word1.length - cnt);
        return (cnt + 'correct out of ' + word1.length + 'words and the total numberof error are ' + errorwords +'.') 
    

}
btn.addEventListener('click', function () {
  if(this.innerText == 'Start'){
      typewords.disabled = false;
      playit();
  }else if(this.innerHTML = 'Done'){
      typewords.disabled = true;
      btn.innerHTML= 'Start';
      endit();
  }
})