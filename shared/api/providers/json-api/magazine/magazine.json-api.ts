import _ from 'lodash';
import { z, type TypeOf } from 'zod';
import type { IMagazineApi } from '../../../core/abstract/magazine.api';
import { MAGAZINE_NOT_EXISTS } from './errors';
import { MagazinesSchema } from '~/shared/api/core/schemas/magazine';
import { Magazine } from '~/entities/magazine/model';
import { UidSchema } from '~/shared/api/core/schemas/common';

export class MagazineJsonApi implements IMagazineApi {
  async getAllMagazines(): Promise<Magazine[]> {
    const data = await import('./data/magazines.json');
    const validated = await MagazinesSchema.parseAsync(data.default);
    const entities = _.map(validated, (props) => new Magazine(props));

    return entities;
  }

  async getMagazine(req: TypeOf<typeof UidSchema>): Promise<Magazine | null> {
    const params = await UidSchema.parseAsync(req);
    const magazines = await this.getAllMagazines();
    const magazine = _.find(magazines, (m) => m.uid === params.uid);

    return magazine ?? null;
  }

  async removeMagazine(req: TypeOf<typeof UidSchema>): Promise<boolean> {
    const result = await UidSchema.superRefine(async (req, ctx) => {
      const magazine = await this.getMagazine(req);

      if (magazine === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: MAGAZINE_NOT_EXISTS,
          fatal: true,
        });

        return z.NEVER;
      }
    }).safeParseAsync(req);

    return result.success;
  }
}
