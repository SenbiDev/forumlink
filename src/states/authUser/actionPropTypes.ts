import { UserTypes } from '../../utils/responsesTypes';
type SetAuthUserActionParam = UserTypes;
type AsyncSetAuthUserParam = { email: string, password: string };

export type {
  SetAuthUserActionParam,
  AsyncSetAuthUserParam,
};