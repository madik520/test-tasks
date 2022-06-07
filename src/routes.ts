// pages
import Home from './pages/Home';
import About from './pages/About';
import Character from './pages/Character';

// other
import { FC } from 'react';

// interface
interface Route {
	key: string;
	title: string;
	path: string;
	enabled: boolean;
	component: FC<{}>;
}

export const routes: Array<Route> = [
	{
		key: 'home-route',
		title: 'Home',
		path: '/',
		enabled: true,
		component: Home
	},
	{
		key: 'about-route',
		title: 'Favorite',
		path: '/favorite',
		enabled: true,
		component: About
	},
	{
		key: 'character-route',
		title: 'Character',
		path: '/character/:id',
		enabled: true,
		component: Character
	}
];
