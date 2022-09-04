import { createResource, createSignal } from 'solid-js';

import { NewReceiptForm, ReceiptsList } from '@/components/organisms';

import { index, create } from '@/resources/receipts';
import { Receipt } from '@/types';

const Receipts = () => {
  const [receipts, { refetch, mutate }] = createResource(index);
  const [newReceipt, setNewReceipt] = createSignal<Receipt | null>(null);

  const [data] = createResource(newReceipt, create);

  const onSubmit = (receipt: Receipt) => {
    setNewReceipt(receipt);

    mutate([...receipts(), data()]);

    refetch();
  };

  console.log({ loading: receipts.loading, receipts: receipts(), error: receipts.error });

  return (
    <div>
      <ReceiptsList receipts={receipts()} />
      <NewReceiptForm onSubmit={onSubmit} />
    </div>
  );
};

export default Receipts;
