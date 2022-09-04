import { Component, For } from 'solid-js';

import { ReceiptCard } from '@/components/molecules';
import { Receipts } from '@/types';

const ReceiptsList: Component<{ receipts: Receipts }> = ({ receipts }) => (
  <div>
    <h1>Receipts</h1>
    <For each={receipts}>{(receipt) => <ReceiptCard receipt={receipt} />}</For>
  </div>
);

export { ReceiptsList };
