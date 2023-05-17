

console.log(" Welcome to Spotify")

// Initialize the variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay= document.getElementById('masterplay')
let myrogressBar = document.getElementById('myprogressBar');

let songs = [
    {songName:"Salem-e-Ishq" , filepath:"song/1.mp3" , coverPath:"cover/1.jpg"},
    {songName:"Salem-e-Ishq" , filepath:"song/1.mp3" , coverPath:"cover/1.jpg"},
    {songName:"Salem-e-Ishq" , filepath:"song/1.mp3" , coverPath:"cover/1.jpg"},
    {songName:"Salem-e-Ishq" , filepath:"song/1.mp3" , coverPath:"cover/1.jpg"},
    {songName:"Salem-e-Ishq" , filepath:"song/1.mp3" , coverPath:"cover/1.jpg"},
    {songName:"Salem-e-Ishq" , filepath:"song/1.mp3" , coverPath:"cover/1.jpg"},

]

//audioElement.play(); 

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
})

// listen to Events
myprogressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    // update Seekbar
})