import { UsersTypes } from '../../utils/responsesTypes';
type ReceiveUsersActionParam = UsersTypes;
type AsyncRegisterUserParam = { name?: string, email?: string, password?:string };
export type {
  ReceiveUsersActionParam,
  AsyncRegisterUserParam,
};