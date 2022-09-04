import { createSignal } from 'solid-js';

const [token, setNewToken] = createSignal<string>(localStorage.getItem('token') || '');

const setToken = (token: string) => {
  localStorage.setItem('token', token);
  setNewToken(token);
};

export { token, setToken };
