import type { IMagazineApi } from './magazine.api';

export abstract class IApiProvider {
  abstract magazine?: IMagazineApi;
}
