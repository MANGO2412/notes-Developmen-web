const webAPi = ()=>{
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if(AudioContext){
    console.log("your navigator supports the web Api audio:", AudioContext);
    return new AudioContext()
  }else{
    alert("Your navigator doesn't support the web Api");
  }

  
}




window.addEventListener("load", ()=>{
  const Audio = webAPi();
  //get the audio element
  const audioElement = document.querySelector('audio');

  //pass it into the audio context
  const track = Audio.createMediaElementSource(audioElement);
  const gainNode = Audio.createGain()
  track.connect(gainNode).connect(Audio.destination);


  const playButton = document.querySelector('button');



  playButton.addEventListener('click',function (){

    // check if context is in suspended state (autoplay policy)
    if (Audio.state === 'suspended') {
        Audio.resume();
        console.log("conditional active")
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        playButton.textContent = "pause"
        this.dataset.playing = 'true';

    } else if (this.dataset.playing === 'true') {
        
        audioElement.pause();
        playButton.textContent = "play"
        this.dataset.playing = 'false';
    }


  },false);


  audioElement.addEventListener('ended', ()=>{
    playButton.dataset.playing = 'false';
    playButton.textContent = "play";
  }, false)

  
  //volumen

  const volumenControl = document.querySelector('#volume');

  volumenControl.addEventListener('input', function (){
       gainNode.gain.value = this.value
  })



})