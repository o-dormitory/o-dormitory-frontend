import { z } from 'zod';

enum NodeEnvEnum {
  Dev = 'development',
  Prod = 'production',
}

const configSchema = z.object({
  NODE_ENV: z.nativeEnum(NodeEnvEnum),
  VITE_API_LINK: z.string().url('API link must be provided'),
});

export type ConfigType = z.infer<typeof configSchema>;

export interface IConfig {
  isProduction(): boolean;
  isDevelopment(): boolean;
  serverLink(): string;
}

class Config implements IConfig {
  constructor(private readonly cfg: ConfigType) { }
  isProduction(): boolean {
    return this.cfg.NODE_ENV === NodeEnvEnum.Prod;
  }

  isDevelopment(): boolean {
    return this.cfg.NODE_ENV === NodeEnvEnum.Dev;
  }

  serverLink(): string {
    return this.cfg.VITE_API_LINK;
  }

  public static default() {
    return new Config(configSchema.parse(import.meta.env));
  }
}

export class ConfigProvider {
  private constructor() {
    throw new Error('Cannot instance of static class');
  }

  private static _config: IConfig;

  public static get(): IConfig {
    if (!this._config) {
      this._config = Config.default();
    }

    return this._config;
  }
}
