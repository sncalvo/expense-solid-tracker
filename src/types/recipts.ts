import { z } from 'zod';

export const ReceiptSchema = z.object({
  id: z.number().optional().nullable(),
  name: z.string(),
  price: z.number().optional().nullable(),
  description: z.number().optional().nullable(),
  category_id: z.number().optional().nullable(),
});

export const ReceiptsSchema = z.array(ReceiptSchema);

export type Receipt = z.infer<typeof ReceiptSchema>;
export type Receipts = z.infer<typeof ReceiptsSchema>;
