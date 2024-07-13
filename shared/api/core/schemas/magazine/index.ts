import { z } from 'zod';

export const MagazineSchema = z.object({
  uid: z.string().uuid(),
  name: z.string().min(1),
  address: z.string().min(1),
});

export const MagazinesSchema = z.array(MagazineSchema);
