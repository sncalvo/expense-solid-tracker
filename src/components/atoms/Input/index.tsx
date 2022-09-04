import type { Component, JSX } from 'solid-js';

const Input: Component<{
  onChange: (value: string) => void;
  id: string;
  value: () => string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  secret?: boolean;
  disabled?: boolean;
}> = ({ onChange, id, value, placeholder, type, secret = false, disabled }) => (
  <input
    onInput={(e) => onChange(e.currentTarget.value)}
    value={value()}
    id={id}
    placeholder={placeholder}
    type={secret ? 'password' : type}
    disabled={disabled}
    classList={{
      'bg-gray-200 text-black p-2 rounded': true,
      'opacity-50 cursor-not-allowed': disabled,
    }}
  />
);

export { Input };
