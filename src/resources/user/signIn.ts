import { createResource, createSignal } from 'solid-js';

import { post } from '../fetcher';
import { setToken } from '@/store/authToken';

import { UserCredentials } from '@/types';

const signInUrl = `/users/sign_in`;

interface Response {
  message: string;
}

export const signIn = async (credentials: UserCredentials) => {
  const response = await post<UserCredentials, Response>(signInUrl, credentials);

  if (response.headers.authorization) {
    setToken(response.headers.authorization);

    return response.headers.authorization;
  }

  throw new Error(response.data.message);
};
