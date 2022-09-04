import { Receipts, Receipt, ReceiptSchema, ReceiptsSchema } from '@/types';

import { get, post } from '../fetcher';

const receiptsUrl = `/receipts`;

export const index = async () => {
  const response = await get<Receipts>(receiptsUrl);

  return ReceiptsSchema.parse(response.data);
};

export const show = async (id: string) => {
  const response = await get<Receipt>(`${receiptsUrl}/${id}`);

  return ReceiptSchema.parse(response.data);
};

export const create = async (receipt: Receipt) => {
  const response = await post<{ receipt: Receipt }, { data: Receipt }>(`${receiptsUrl}`, {
    receipt,
  });

  return ReceiptSchema.parse(response.data);
};
