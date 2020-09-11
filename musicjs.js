	const music=document.querySelector("audio");
	const img=document.querySelector("img");
	const play=document.getElementById("play");
	const title=document.getElementById("title");
	const artist=document.getElementById("artist");
	const prev=document.getElementById("prev");
	const next=document.getElementById("next");
	const songs=[
			{
				name:"yummy",
				title:"Yummy",
				artist:"Justin Bieber",
			},
			{
				name:"alan",
				title:"Alan",
				artist:"Alan Walker",
			},
			{
				name:"shawn",
				title:"Senorita",
				artist:"Shawn Mendes",
			},
		]
	let isPlaying=false;
	const playMusic = () => {
		isPlaying=true;
		music.play();
		play.classList.replace("fa-play-circle","fa-pause");
		img.classList.add("anime");
	};
	const pauseMusic = () => {
		isPlaying=false;
		music.pause();
		play.classList.replace("fa-pause","fa-play-circle");
		img.classList.remove("anime");
	};
	play.addEventListener("click",() => {
		if(isPlaying)
		{
			pauseMusic();
		}
		else
		{
			playMusic();
		}
	});
	const loadSong=(songs)=>{
		title.textContent=songs.title;
		artist.textContent=songs.artist;
		music.src=""+songs.name+".mp3";
		img.src=""+songs.name+".jpg";
	
	};
	songIndex=0;
	
	const nextSong = () => {
		
		songIndex=(songIndex+1)%songs.length;
		loadSong(songs[songIndex]);
		playMusic();
	};
	const prevSong = () => {
		
		songIndex=(songIndex-1+songs.length)%songs.length;
		loadSong(songs[songIndex]);
		playMusic();
	};
	next.addEventListener("click",nextSong);
	prev.addEventListener("click",prevSong);