import type { IApiProvider } from './core/abstract/api.provider';
import type { IMagazineApi } from './core/abstract/magazine.api';
import { MagazineJsonApi } from './providers/json-api/magazine/magazine.json-api';

export class Api implements IApiProvider {
  magazine?: IMagazineApi;

  useMagazineApi(magazine: IMagazineApi) {
    this.magazine = magazine;
  }
}

export const api = new Api();

api.useMagazineApi(new MagazineJsonApi())
