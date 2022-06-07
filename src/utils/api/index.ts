const BASE_URL = 'https://rickandmortyapi.com/api';
const ALL_CHAR = '/character';
const NAME = '/?name=';

export const fetchApi = async (name?: string) => {
	try {
		const resp = await fetch(`${BASE_URL}${ALL_CHAR}${name ? `${NAME}${name}` : ''}`);
		const data = await resp.json();

		return data;
	} catch (err) {
		return console.log(err);
	}
};
