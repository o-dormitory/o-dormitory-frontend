import type { TypeOf } from 'zod';
import type { UidSchema } from '../schemas/common';
import type { Magazine } from '~/entities/magazine/model';

export abstract class IMagazineApi {
  abstract getAllMagazines(): Promise<Magazine[]>;
  abstract getMagazine(req: TypeOf<typeof UidSchema>): Promise<Magazine | null>;
  abstract removeMagazine(req: TypeOf<typeof UidSchema>): Promise<boolean>;
}
