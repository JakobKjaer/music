import { v4 as uuidv4 } from 'uuid';
import ReturnBack from './music/yahkob_returnback.mp3';
import ThroughTheLights from './music/yahkob_throughthelights.mp3';
import Designer from './music/yahkob_designer.mp3';
import Lost from './music/yahkob_lost.mp3';
import OnMyWay from './music/yahkob_onmyway.mp3';
import Hypnotized from './music/yahkob_hypnotized.mp3';
import Vacation from './music/yahkob_vacation.mp3';
import BlessMe from './music/yahkob_blessme.mp3';
import RunningAway from './music/yahkob_runningaway.mp3';
import TheMovement from './music/yahkob_themovement.mp3';
import Carnival from './music/yahkob_carnival.mp3';
import MyTown from './music/yahkob_mytown.mp3';

function YahKobProductions() {
	return [
		{
			title: 'Return Back',
			cover: 'https://i1.sndcdn.com/artworks-000641950384-tjv0oc-t500x500.jpg',
			artist: 'Yah Kob',
			audio: ReturnBack,
			color: ['#89710D', '#434343'],
			id: uuidv4(),
			active: true,
		},
		{
			title: 'Through The Lights',
			cover: 'https://i1.sndcdn.com/artworks-000578944403-wxoud4-t500x500.jpg',
			artist: 'Yah Kob',
			audio: ThroughTheLights,
			color: ['#CF2E69', '#4F70B6'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Designer',
			cover:
				'https://i1.sndcdn.com/artworks-Qaufl5yIUarUMYrX-3wKzHQ-t500x500.jpg',
			artist: 'Yah Kob',
			audio: Designer,
			color: ['#BD2146', '#CAA88B'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Lost',
			cover:
				'https://i1.sndcdn.com/artworks-sMTQtSAseFtF0d7z-yUDmMg-t500x500.jpg',
			artist: 'Yah Kob',
			audio: Lost,
			color: ['#88776F', '#435057'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'On My Way',
			cover: 'https://i1.sndcdn.com/artworks-000645231895-8qhvqj-t500x500.jpg',
			artist: 'Yah Kob',
			audio: OnMyWay,
			color: ['#25B3AC', '#33464D'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Hypnotized',
			cover: 'https://i1.sndcdn.com/artworks-000643449574-dsnz2e-t500x500.jpg',
			artist: 'Yah Kob',
			audio: Hypnotized,
			color: ['#2F372E', '#372623'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Vacation',
			cover: 'https://i1.sndcdn.com/artworks-000641526349-03gkgb-t500x500.jpg',
			artist: 'Yah Kob',
			audio: Vacation,
			color: ['#5C909B', '#544145'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Bless Me',
			cover:
				'https://i1.sndcdn.com/artworks-QiGMeN46wcEaffIH-Dv30ug-t500x500.jpg',
			artist: 'Yah Kob',
			audio: BlessMe,
			color: ['#272D37', '#B6B0B8'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Running Away',
			cover: 'https://i1.sndcdn.com/artworks-000565881917-gl3i6d-t500x500.jpg',
			artist: 'Yah Kob',
			audio: RunningAway,
			color: ['#C0A66C', '#A55C53'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'The Movement',
			cover: 'https://i1.sndcdn.com/artworks-000574171226-lun7qe-t500x500.jpg',
			artist: 'Yah Kob',
			audio: TheMovement,
			color: ['#955144', '#4E615C'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'Carnival',
			cover: 'https://i1.sndcdn.com/artworks-000580293506-sq4s7y-t500x500.jpg',
			artist: 'Yah Kob',
			audio: Carnival,
			color: ['#773331', '#482434'],
			id: uuidv4(),
			active: false,
		},
		{
			title: 'My Town',
			cover:
				'https://i1.sndcdn.com/artworks-8JkLR3xVVKziuN1T-1ygk3g-t500x500.jpg',
			artist: 'Yah Kob',
			audio: MyTown,
			color: ['#D7843E', '#942632'],
			id: uuidv4(),
			active: false,
		},
	];
}

export default YahKobProductions;
