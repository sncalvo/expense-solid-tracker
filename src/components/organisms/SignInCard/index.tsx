import { Component, createEffect, createResource, createSignal } from 'solid-js';

import { SignInForm } from '@/components/molecules';

import { signIn } from '@/resources/user/signIn';

import type { UserCredentials } from '@/types';
import { setToken } from '@/store/authToken';

const SignInCard: Component = () => {
  const [signInData, setSignInData] = createSignal<UserCredentials | null>(null);

  const [signedIn] = createResource(signInData, signIn);

  const onSubmit = (credentials: UserCredentials) => {
    setSignInData(credentials);
  };

  createEffect(() => {
    setToken(signedIn());
  });

  return <SignInForm onSubmit={onSubmit} />;
};

export { SignInCard };
