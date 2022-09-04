import type { Component } from 'solid-js';

const Label: Component<{ for: string; label: string }> = ({ for: htmlFor, label }) => (
  <label for={htmlFor} class="block text-gray-700 text-sm font-bold mb-2">
    {label}
  </label>
);

export { Label };
