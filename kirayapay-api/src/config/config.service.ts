import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// const { development, staging, production, demo } = serverConfiguration.env;
let production = 'prod'
let development = 'dev'
let staging = 'staging'
let demo = 'demo'
interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;
  private readonly deploymentEnv: string;

  constructor() {

    let filePath = '.env';
    if (process.env.NODE_ENV === 'test') {
      filePath = '.env.test';
    }

    this.deploymentEnv = process.env.DEPLOYMENT_ENV || 'development';
    const envFile = path.resolve(__dirname, '../../', filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
  getDeploymentEnv(): string {
    return this.deploymentEnv;
  }

  isProduction(): boolean {
    return this.getDeploymentEnv() === production;
  }

  isDevelopment(): boolean {
    return this.getDeploymentEnv() === development;
  }
  get expressCorsOption() {
    const configService = this;
    console.log('dfs');
    
    return {
      origin(origin, callback) {
        let allow = false;
        if (configService.isDevelopment()) {
          allow = true;
        }
        else if (origin) {
          const isMyDomain = origin.endsWith('demowebsite.com');
          if (configService.isProduction()) {
            allow = isMyDomain;
          } else {
            allow = isMyDomain || origin.includes('localhost');
          }
        }
        callback(null, allow);
      },
    };
  }
}
