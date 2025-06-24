import config from './config.json';

type Environment = 'dev' | 'doctortest';

interface Config {
  environment: Environment;
  domain: {
    dev: string;
    doctortest: string;
    [key: string]: string;
  };
}

const typedConfig = config as Config;

const baseUrl = `${typedConfig.domain[typedConfig.environment]}/${typedConfig.environment}`;

export const apiConfig = {
  baseUrl: baseUrl,
};
