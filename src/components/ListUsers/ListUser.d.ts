import { UserTypes } from '../../utils/types';

export interface IListUser {
  userData: UserTypes[];
  clearUsers: () => void;
}