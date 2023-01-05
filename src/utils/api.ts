/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { LeaderboardsTypes, ResponsesTypes, ThreadTypes, UserTypes } from './responsesTypes';

const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function putAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }
  
  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }
  
  async function _fetchWithAuth(url: RequestInfo | URL, options?: { method: string | undefined, headers?: HeadersInit | undefined, body?: BodyInit | null | undefined }) {
    return fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }
  
  async function register({ name, email, password }:{ name: string, email: string, password: string }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  
    const responseJson: ResponsesTypes = await response.json();
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { user } } = responseJson;
  
    return user;
  }
  
  async function login({ email, password }:{ email?: string, password?: string }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { token } } = responseJson;

    putAccessToken(token ?? '');
  
    return token;
  }
  
  async function _getOwnProfile(): Promise<UserTypes | undefined> {
    return Promise.resolve({});
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { user } } = responseJson;
  
    return user;
  }
  
  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { users } } = responseJson;
  
    return users;
  }
  
  async function getAllThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { threads } } = responseJson;
  
    return threads;
  }
  
  async function getThreadDetail(id: string) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { detailThread } } = responseJson;
  
    return detailThread;
  }

  async function _createThread({ title, body, category }: { title?: string | undefined; body?: string | undefined; category?: string | undefined; }): Promise<ThreadTypes | undefined> {
    return Promise.resolve({ title, body, category });
  }
  
  async function createThread({ title, body, category = '' }: { title?: string, body?: string, category?: string }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
        category,
      }),
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { thread } } = responseJson;
  
    return thread;
  }
  
  async function toggleUpVoteThread(threadId: string) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
    const { data: { vote } } = responseJson;
  
    return vote;
  }
  
  async function toggleDownVoteThread(threadId: string) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;
  
    return vote;
  }
  
  async function toggleNeutralVoteThread(threadId: string) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;
  
    return vote;
  }

  async function createComment({ content, threadId }:{ content: string, threadId: string }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
      }),
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { comment } } = responseJson;
  
    return comment;
  }
  
  async function toggleUpVoteComment({ threadId, commentId }: { threadId: string, commentId: string }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;
  
    return vote;
  }
  
  async function toggleDownVoteComment({ threadId, commentId }: { threadId: string, commentId: string }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;
  
    return vote;
  }
  
  async function toggleNeutralVoteComment({ threadId, commentId }: { threadId: string, commentId: string }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }

    const { data: { vote } } = responseJson;
  
    return vote;
  }

  async function _getLeaderboards(): Promise<LeaderboardsTypes | undefined> {
    return Promise.resolve([]);
  }

  async function getLeaderboards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);
  
    const responseJson: ResponsesTypes = await response.json();
  
    const { status, message } = responseJson;
  
    if (status !== 'success') {
      throw new Error(message);
    }
  
    const { data: { leaderboards } } = responseJson;
  
    return leaderboards;
  }
  
  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getAllUsers,
    _getOwnProfile,
    getOwnProfile,
    _createThread,
    createThread,
    getAllThreads,
    getThreadDetail,
    toggleUpVoteThread,
    toggleDownVoteThread,
    toggleNeutralVoteThread,
    createComment,
    toggleUpVoteComment,
    toggleDownVoteComment,
    toggleNeutralVoteComment,
    _getLeaderboards,
    getLeaderboards,
  };
})();
  
export default api;
  