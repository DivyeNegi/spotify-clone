console.log("welcome");
let songIndex = 0;
let mainplay = document.getElementById("mainplayy");
let progress = document.getElementById("progress");
let playicon = document.getElementById("mainplay");
let audioElement = new Audio("songs/hosanna.mp3");
let rotatealbum=document.getElementById('rotate');

let songs = [
  {
    songname: "Hosanna",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "It's You",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "O Rangrez",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "Excuses",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "This Side of Pradise",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "Hosanna",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "Hosanna",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "Hosanna",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "Hosanna",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
  {
    songname: "Hosanna",
    filepath: "songs/hosanna.mp3",
    coverpath: "covers/hosanna.jpg",
  },
];

let songItems=document.getElementsByClassName('song');

mainplay.addEventListener("click", () => {
  console.log("uff");
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    playicon.classList.remove('fa-play-circle');
    playicon.classList.add('fa-pause-circle');
    rotatealbum.classList.add('rotate');
  } else {
    audioElement.pause();
    playicon.classList.add('fa-play-circle');
    playicon.classList.remove('fa-pause-circle');
    rotatealbum.classList.remove('rotate');
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeUpdate");
  currprogress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(currprogress);
  progress.value=currprogress;
});

progress.addEventListener('change',()=>{
    audioElement.currentTime=progress.value*audioElement.duration/100;
})
