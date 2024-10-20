let songindex=0
let audioElement=new Audio("song/m2.mp3")
// audioElement.play()
let masterPlay=document.getElementById("masterPlay")
let myprogressBar=document.getElementById("Range")
let gif=document.getElementById('gif')
let prev=document.getElementById('previous')
let next=document.getElementById('next')
let masterSongName=document.getElementById("masterSongName")
let songItem=Array.from(document.getElementsByClassName("songItem"))

let song=[
    {songName:"Dgabaj Re Dabanng2",filePath:"song/m1.mp3",coverPath:"Img/djabajRe.jpg"},
    {songName:"Tum jo aye jindgi me",filePath:"song/m2.mp3",coverPath:"Img/tumjoaye.jpg"},
    {songName:"Ye lamha song",filePath:"song/m3.mp3",coverPath:"Img/Yelamha.jpeg"},
    {songName:"Tanu itna mai pyar kra",filePath:"song/m4.mp3",coverPath:"Img/tanuitna.jpeg"},
    {songName:"Isque vo bla hai",filePath:"song/m5.mp3",coverPath:"Img/isque.jpg"},
    {songName:"Mera chain van sab ujda",filePath:"song/m6.mp3",coverPath:"Img/merachain.jpeg"},
]

songItem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src=song[i].coverPath;
    element.getElementsByClassName('SongName')[0].innerText=song[i].songName;
    
})



// HandalPlay/Pause click
masterPlay.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.add("fa-circle-pause")
        masterPlay.classList.remove("fa-circle-play")
        gif.style.opacity=1
    }else{
        audioElement.pause()
        masterPlay.classList.add("fa-circle-play")
        masterPlay.classList.remove("fa-circle-pause")
        gif.style.opacity=0
    }
})

// time update
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressBar.value=progress;
})

// change event in progressBar

myprogressBar.addEventListener("change",()=>{
    progress=(myprogressBar.value*audioElement.duration)/100;
    audioElement.currentTime=progress;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

            element.classList.remove('fa-circle-pause');        
            element.classList.add('fa-circle-play');     
    });
};




// for button in songList 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{    
    makeAllPlays();
    index=parseInt(e.target.id);
    songindex=index;
    masterSongName.innerText=song[songindex].songName;
    e.target.classList.remove('fa-circle-play')
    e.target.classList.add('fa-circle-pause')
  
    audioElement.src=`song/m${index+1}.mp3`;    
    audioElement.currentTime=0;
    x=audioElement.play();  

    gif.style.opacity = 1;

    // masterPlay.classList.add("fa-circle-play")
    // masterPlay.classList.remove("fa-circle-pause")

    masterPlay.classList.add("fa-circle-pause");
    masterPlay.classList.remove("fa-circle-play");
    
    })
})


// forword and backword


prev.addEventListener('click',()=>{
    if (songindex<=0){
        songindex=0
    }
    else{
        songindex-=1
    }
    audioElement.src=`song/m${songindex+1}.mp3`;
    masterSongName.innerText=song[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add("fa-circle-pause");

})

next.addEventListener('click',()=>{
    // song.filePath
    if (songindex>=5){
        songindex=0
    }
    else{
        songindex+=1
    }
    audioElement.src=`song/m${songindex+1}.mp3`;
    masterSongName.innerText=song[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add("fa-circle-pause");
})