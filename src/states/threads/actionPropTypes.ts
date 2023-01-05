import { ThreadsTypes } from '../../utils/responsesTypes';
import { ThreadTypes } from '../../utils/responsesTypes';

type ReceiveThreadsActionType = ThreadsTypes;
type AddThreadActionType = ThreadTypes;
type AsyncAddThreadType = { title?: string, body?: string, category?: string };

export type {
  ReceiveThreadsActionType,
  AddThreadActionType,
  AsyncAddThreadType,
};