import { ConnectionOptions } from "typeorm";
import { envConfig } from "./config/env.config";

console.log(envConfig, '>>>>>>>>>>>>>envConfig>>>>>>>>>>>>>>>>>>>>>>>')
const srcConfig = ["src/entity/**/*.ts"];
const distConfig = ["build/entity/**/*.js"];

const srcmigrationConfig = ["src/migration/**/*.ts"];
const dismigrationtConfig = ["build/migration/**/*.js"];


const srcSubscriberConfig = ["src/subscriber/**/*.ts"];
const disSubscribertConfig = ["build/subscriber/**/*.js"];

const config: ConnectionOptions = {
  type: "mysql",
  host: envConfig.MYSQL_HOST,
  port: parseInt(envConfig.MYSQL_PORT),
  username: envConfig.MYSQL_USER,
  password: envConfig.MYSQL_PASSWORD,
  database: envConfig.MYSQL_DB,
  synchronize: false,
  logging: true,
  entities: envConfig.TS_NODE ? srcConfig : distConfig,
  migrations: envConfig.TS_NODE ? srcmigrationConfig : dismigrationtConfig,
  subscribers: envConfig.TS_NODE ? srcSubscriberConfig : disSubscribertConfig,
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

export = config;
