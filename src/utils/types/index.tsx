export type CharacterTypes = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
  favorite: boolean;
}

export interface IAllCharacters {
  info: {
    count: number,
    pages: number;
    next: string;
    prev: null | string;
  };
  results: CharacterTypes[]
}

// Initial state

export interface IState {
  allCharacters: {
    isFetching: boolean;
    characters: IAllCharacters;
  };
  charactersByName: {
    isFetching: boolean;
    characters: IAllCharacters;
  };
  selectedCharacter: CharacterTypes;
  favoriteChar: CharacterTypes[];
}