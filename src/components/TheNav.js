import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const TheNav = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<nav className="theNav">
			<h1>Waves</h1>
			<button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library <FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	);
};

export default TheNav;
