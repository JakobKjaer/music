import React from 'react';
// import { playAudio } from '../functions';

const TheLibrarySonglist = ({
	eachSongs,
	setCurrentSong,
	songs,
	audioRef,
	playingStatus,
	setSongs,
}) => {
	// Event Handler
	const selectSongEventHandler = async () => {
		const selectedSong = songs.filter((state) => state.id === eachSongs.id);
		await setCurrentSong(selectedSong[0]);
		// Add Active State
		const activeSong = songs.map((theSong) => {
			if (theSong.id === eachSongs.id) {
				return {
					...theSong,
					active: true,
				};
			} else {
				return {
					...theSong,
					active: false,
				};
			}
		});
		setSongs(activeSong);
		// Tjeck om sangen afspiller ved første klik.
		audioRef.current.play();
	};
	return (
		<div
			className={`theLibrarySonglist ${
				eachSongs.active ? 'theLibrary__selected' : ''
			}`}
			onClick={selectSongEventHandler}
		>
			<img src={eachSongs.cover} alt={eachSongs.title} />
			<div className="theLibrarySonglist__description">
				<h3>{eachSongs.title}</h3>
				<h4>{eachSongs.artist}</h4>
			</div>
		</div>
	);
};

export default TheLibrarySonglist;
