import { Component, createSignal } from 'solid-js';

import { Receipt, ReceiptSchema } from '@/types';

import { Button, Input, Label } from '@/components/atoms';

export const NewReceiptForm: Component<{ onSubmit: (receipt: Receipt) => void }> = ({
  onSubmit,
}) => {
  const [name, setName] = createSignal('');
  const [price, setPrice] = createSignal(0.0);
  const [description, setDescription] = createSignal('');

  const onSubmitForm = (event: Event) => {
    event.preventDefault();

    const receipt = ReceiptSchema.parse({
      name: name(),
      price: price(),
      category_id: 1,
    });

    onSubmit(receipt);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <Label for="receiptName" label="Name" />
        <Input id="receiptName" value={name} onChange={(value) => setName(value)} />
      </div>

      <div>
        <Label for="receiptPrice" label="Price" />
        <Input
          id="price"
          value={() => `${price()}`}
          onChange={(price) => setPrice(parseInt(price))}
        />
      </div>

      <div>
        <Label for="receiptDescription" label="Description" />
        <Input
          id="receiptDescription"
          value={description}
          onChange={(value) => setDescription(value)}
        />
      </div>

      <Button type="submit">Create</Button>
    </form>
  );
};
