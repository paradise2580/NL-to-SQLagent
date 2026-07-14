import { configDotenv } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

configDotenv();

const singlestoreCaPath = path.join(process.cwd(), 'singlestore_bundle.pem');

// SingleStore uses the MySQL wire protocol — TypeORM `mysql` driver + mysql2
export const PostgreSqlDataSource = TypeOrmModule.forRootAsync({
  name: 'postgres',
  useFactory: async (config: ConfigService) => ({
    type: 'mysql',
    host: config.get<string>('DB_HOST'),
    port: parseInt(config.get<string>('DB_PORT', '3306'), 10),
    username: config.get<string>('DB_USER'),
    password: config.get<string>('DB_PASSWORD'),
    database: config.get<string>('DB_NAME'),
    ssl:
      config.get<string>('DB_SSL', 'false') === 'true'
        ? {
            ca: fs.readFileSync(singlestoreCaPath),
            rejectUnauthorized: true,
          }
        : undefined,
    autoLoadEntities: true,
    synchronize: config.get<string>('DB_SYNCHRONIZE', 'true') === 'true',
    logging: config.get<string>('DB_LOGGING', 'true') === 'true',
  }),
  inject: [ConfigService],
});

export const SqliteDataSource = TypeOrmModule.forRootAsync({
  name: 'sqlite',
  useFactory: async () => ({
    type: 'sqlite',
    database: './data/northwind.db',
  }),
});
