import { Component, createSignal } from 'solid-js';

import { Button, Input, Label } from '@/components/atoms';

import type { UserCredentials } from '@/types';

const SignInForm: Component<{
  onSubmit: (event: UserCredentials) => void;
}> = ({ onSubmit }) => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  const formOnSubmit = (event: Event) => {
    event.preventDefault();

    onSubmit({ user: { email: email(), password: password() } });
  };

  return (
    <form onsubmit={formOnSubmit} class="p-2">
      <div class="mb-4">
        <Label for="email" label="Email" />
        <Input id="email" value={email} onChange={setEmail} />
      </div>
      <div class="mb-6">
        <Label for="password" label="Password" />
        <Input id="password" value={password} onChange={setPassword} secret />
      </div>
      <Button type="submit" variant="primary">
        Sign In
      </Button>
    </form>
  );
};

export { SignInForm };
