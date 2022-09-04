import { Component } from 'solid-js';

import { Receipt } from '@/types';

const ReceiptCard: Component<{ receipt: Receipt }> = ({ receipt: { name, price } }) => (
  <div>
    <h3>{name}</h3>
    <h4>{price}</h4>
  </div>
);

export { ReceiptCard };
