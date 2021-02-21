import React, { useState, useRef } from 'react';
import './styles/App.css';
import songList from './Songlist';
import ThePlayer from './components/ThePlayer';
import TheSong from './components/TheSong';
import TheLibrary from './components/TheLibrary';
import TheNav from './components/TheNav';

function App() {
	// Reference
	const audioRef = useRef(null);
	// State
	const [songs, setSongs] = useState(songList());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [playingStatus, setPlayingStatus] = useState(false);
	const [songInformation, setSongInformation] = useState({
		currentTime: 0,
		duration: 0,
		animationPercentage: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);
	// Event Handler
	const timeUpdateEventHandler = (e) => {
		const myCurrentTime = e.target.currentTime;
		const myDuration = e.target.duration;
		// Udregne Procent
		const roundedCurrentTime = Math.round(myCurrentTime);
		const roundedDuration = Math.round(myDuration);
		const myAnimationPercentage = Math.round(
			(roundedCurrentTime / roundedDuration) * 100
		);
		setSongInformation({
			...songInformation,
			currentTime: myCurrentTime,
			duration: myDuration,
			animationPercentage: myAnimationPercentage,
		});
	};
	const songEndEventHandler = async () => {
		let currentIndex = songs.findIndex(
			(eachSong) => eachSong.id === currentSong.id
		);
		await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
		if (playingStatus) {
			audioRef.current.play();
		}
	};
	return (
		<div className={`App ${libraryStatus ? 'AppLibrary__active' : ''}`}>
			<TheNav
				libraryStatus={libraryStatus}
				setLibraryStatus={setLibraryStatus}
			/>
			<TheSong currentSong={currentSong} />
			<ThePlayer
				playingStatus={playingStatus}
				currentSong={currentSong}
				songInformation={songInformation}
				songs={songs}
				setPlayingStatus={setPlayingStatus}
				setCurrentSong={setCurrentSong}
				setSongInformation={setSongInformation}
				setSongs={setSongs}
				audioRef={audioRef}
			/>
			<TheLibrary
				songs={songs}
				playingStatus={playingStatus}
				libraryStatus={libraryStatus}
				setSongs={setSongs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
			/>
			<audio
				ref={audioRef}
				src={currentSong.audio}
				onTimeUpdate={timeUpdateEventHandler}
				onLoadedMetadata={timeUpdateEventHandler}
				onEnded={songEndEventHandler}
			></audio>
		</div>
	);
}

export default App;
