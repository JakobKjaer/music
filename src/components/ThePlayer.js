import React from 'react';
// import { playAudio } from '../functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
} from '@fortawesome/free-solid-svg-icons';

const ThePlayer = ({
	currentSong,
	playingStatus,
	songInformation,
	songs,
	setPlayingStatus,
	setCurrentSong,
	setSongInformation,
	setSongs,
	audioRef,
}) => {
	// Event Handlers
	const activeLibraryEventHandler = (activePrevious) => {
		// Add Active State
		const activeSong = songs.map((theSong) => {
			if (theSong.id === activePrevious.id) {
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
	};
	const playSongEventHandler = () => {
		if (playingStatus) {
			audioRef.current.pause();
			setPlayingStatus(!playingStatus);
		} else {
			audioRef.current.play();
			setPlayingStatus(!playingStatus);
		}
	};

	const getTime = (theTime) => {
		return (
			Math.floor(theTime / 60) +
			':' +
			('0' + Math.floor(theTime % 60)).slice(-2)
		);
	};

	const dragEventHandler = (e) => {
		audioRef.current.currentTime = e.target.value;
		setSongInformation({ ...songInformation, currentTime: e.target.value });
	};

	const skipTrackEventHandler = async (direction) => {
		let currentIndex = songs.findIndex(
			(eachSong) => eachSong.id === currentSong.id
		);
		if (direction === 'skipForward') {
			await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
			activeLibraryEventHandler(songs[(currentIndex + 1) % songs.length]);
		}
		if (direction === 'skipBackward') {
			if ((currentIndex - 1) % songs.length === -1) {
				await setCurrentSong(songs[songs.length - 1]);
				activeLibraryEventHandler(songs[songs.length - 1]);
				audioRef.current.play();
				return;
			}
			await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
			activeLibraryEventHandler(songs[(currentIndex - 1) % songs.length]);
		}
		if (playingStatus) {
			audioRef.current.play();
		}
	};
	// Style Animations
	const trackAnimation = {
		transform: `translateX(${songInformation.animationPercentage}%)`,
	};
	return (
		<div className="thePlayer">
			<div className="thePlayer__timeControl">
				<p>{getTime(songInformation.currentTime)}</p>
				<div
					className="thePlayer__track"
					style={{
						background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
					}}
				>
					<input
						type="range"
						min={0}
						max={songInformation.duration || 0}
						value={songInformation.currentTime}
						onChange={dragEventHandler}
					/>
					<div
						className="thePlayer__animatedTrack"
						style={trackAnimation}
					></div>
				</div>
				<p>{getTime(songInformation.duration || 0)}</p>
			</div>
			<div className="thePlayer__playControl">
				<FontAwesomeIcon
					className="thePlayer__leftButton"
					icon={faAngleLeft}
					size="2x"
					onClick={() => skipTrackEventHandler('skipBackward')}
				/>
				<FontAwesomeIcon
					className="thePlayer__playButton"
					icon={playingStatus ? faPause : faPlay}
					size="2x"
					onClick={playSongEventHandler}
				/>
				<FontAwesomeIcon
					className="thePlayer__rightButton"
					icon={faAngleRight}
					size="2x"
					onClick={() => skipTrackEventHandler('skipForward')}
				/>
			</div>
		</div>
	);
};

export default ThePlayer;
