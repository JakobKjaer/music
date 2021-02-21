import React from 'react';

const TheSong = ({ currentSong }) => {
	return (
		<div className="theSong">
			<img
				className="theSong__cover"
				src={currentSong.cover}
				alt={currentSong.title}
			></img>
			<h2>{currentSong.title}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
	);
};

export default TheSong;
