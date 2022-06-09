export type UserRepos = {
	id: number;
	name: string;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
};

export type UserTypes = {
	login: string;
	id: number;
	avatar_url: string;
	html_url: string;
	repos_url: string;
	followers: number;
	following: number;
	bio: string | null;
	email: string | null;
	location: string;
	created_at: string;
	public_repos: number;
};

export interface IState {
	isFetching: boolean;
	user: UserTypes[];
	userInfo: {
		mainInfo: UserTypes;
		repositories: {
			isFetching: boolean;
			repos: UserRepos[];
			searchName: string;
		};
	};
}
