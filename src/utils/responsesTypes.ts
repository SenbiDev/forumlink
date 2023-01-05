type StatusTypes = 'success' | 'error';
type MessageTypes = string;
export type UserTypes = {
  id?: string,
  name?: string,
  email?: string,
  avatar?: string
} | null;
export type UsersTypes = UserTypes[];
export type TokenType = string;
export type ThreadTypes = {
  id?: string;
  title?: string;
  body?: string;
  category?: string;
  createdAt?: string;
  ownerId?: string;
  upVotesBy?: string[];
  downVotesBy?: string[];
  totalComments?: number;
  owner?: UserTypes,
  comments?: CommentTypes[]
};
export type ThreadsTypes = ThreadTypes[];
export type CommentTypes = {
  id?: string,
  content?: string,
  createdAt?: string,
  upVotesBy?: string[],
  downVotesBy?: string[],
  owner?: UserTypes
}; 
export type ThreadVoteTypes = {
  id?: string,
  userId?: string,
  threadId?: string,
  voteType?: 0 | 1 | -1
};

export type CommentVoteTypes = {
  id?: string,
  userId?: string,
  commentId?: string,
  voteType?: 0 | 1 | -1
};
export type LeaderboardsTypes = { user?: UserTypes, score?: number }[];

export type ResponsesTypes = {
  status: StatusTypes,
  message: MessageTypes,
  data: {
    user?: UserTypes,
    token?: TokenType,
    users?: UsersTypes,
    thread?: ThreadTypes,
    threads?: ThreadsTypes
    detailThread?: ThreadTypes
    comment?: CommentTypes,
    vote?: ThreadVoteTypes | CommentVoteTypes,
    leaderboards?: LeaderboardsTypes
  },
};