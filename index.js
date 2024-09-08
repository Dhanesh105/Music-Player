let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")
let song_pause = document.getElementById("pause");



console.log(song_play)

let songs_list = [
    {
        name : 'Cold',
        Image : 'https://i.scdn.co/image/ab67616d0000b273fc4852898bc6ed85b3e3f89c',
        Song : 'mus/cold.mp3',
        Singer : 'Maroon 5'
    },
    {
        name : 'One Dance',
        Image : 'https://i1.sndcdn.com/artworks-mS6d7vFc5d7IAkIW-L8hkzg-t500x500.jpg',
        Song : 'mus/One.mp3',
        Singer : 'Drake'
    },
    {
        name : 'Senorita',
        Image : 'https://i1.sndcdn.com/artworks-000611349526-2aauwb-t500x500.jpg',
        Song : 'mus/sen.mp3',
        Singer : 'Shawn Mendes , Camila Cabello'
    },
    {
        name : 'There is nothing holding me back',
        Image : 'https://i.scdn.co/image/ab67616d0000b273ea3ef7697cfd5705b8f47521',
        Song : 'mus/the.mp3',
        Singer : 'Shawn Mendes'
    }
]

let i=0;
let flag=false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false)
      {
        song_play.style.display="none";
        song_pause.style.display="block";
        audio.play()
        flag=true;
        console.log(flag)
    }
    else{
        audio.pause()
        
        flag=false;
        console.log(flag)
    }
})
song_pause.addEventListener("click", function(){

  if(flag ===true)
    {
      song_play.style.display="block";
      song_pause.style.display="none";
      audio.pause()
      flag=false;
      console.log(flag)
  }
  else{
      audio.play()
      
      flag=true;
      console.log(flag)
  }
})

song_next.addEventListener("click", function(){
  song_play.style.display="none";
  song_pause.style.display="block";
    audio.pause()
    flag = false;
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }

})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        console.log(flag)
    }
    
    
})