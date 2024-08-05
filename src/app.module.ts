import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { FountsModule } from './founts/founts.module';

import database from './config/database';
import app from './config/app';
import auth from './config/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [database, app, auth],
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.local',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.user'),
        password: config.get('database.password'),
        database: config.get('database.database'),
        schema: config.get('database.schema'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        migrations: ['dist/migrations/*{.ts,.js}'],
        synchronize: config.get('database.synchronize'),
        migrationsRun: true,
        logging: true,
        ssl:
          process.env.NODE_ENV == 'production'
            ? {
                rejectUnauthorized: config.get(
                  'database.ssl.rejectUnauthorized',
                ),
              }
            : false,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    FountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
