import type { Component, JSX } from 'solid-js';

const Button: Component<{
  onClick?: () => void;
  children: JSX.Element;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  disabled?: boolean;
}> = ({ onClick, children, type = 'button', variant = 'primary', disabled }) => (
  <button
    onclick={onClick}
    classList={{
      'p-2 rounded': true,
      'bg-blue-500 text-white hover:bg-blue-300 hover:shadow hover:inner-shadow':
        variant === 'primary',
      'bg-gray-200 text-black hover:bg-gray-100 hover:shadow hover:inner-shadow':
        variant === 'secondary',
      'bg-gray-500 text-white hover:bg-gray-300 hover:shadow hover:inner-shadow':
        variant === 'tertiary',
      'bg-red-500 text-white hover:bg-red-300 hover:shadow hover:inner-shadow':
        variant === 'danger',
      'opacity-50 cursor-not-allowed': disabled,
    }}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export { Button };
