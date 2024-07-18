import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ecomunidad',
  password: 'xBGTGHfX5Pss2jqGYFV1yfFqeFEBdwWw',
  database: 'ecotrackdb',
  schema: 'public',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migration/*.ts'],
  synchronize: true,
  migrationsRun: true,
  ssl: false,
});
