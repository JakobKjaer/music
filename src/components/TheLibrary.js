import React from 'react';
import TheLibrarySonglist from './TheLibrarySonglist';

const TheLibrary = ({
	songs,
	setCurrentSong,
	audioRef,
	playingStatus,
	setSongs,
	libraryStatus,
}) => {
	return (
		<div className={`theLibrary ${libraryStatus ? 'theLibrary__active' : ''}`}>
			<h2>Library</h2>
			<div className="theLibrary__songs">
				{songs.map((eachSongs) => (
					<TheLibrarySonglist
						eachSongs={eachSongs}
						playingStatus={playingStatus}
						setSongs={setSongs}
						setCurrentSong={setCurrentSong}
						songs={songs}
						key={eachSongs.id}
						audioRef={audioRef}
					/>
				))}
			</div>
		</div>
	);
};

export default TheLibrary;
