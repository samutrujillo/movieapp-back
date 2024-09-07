import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.entity';
import { FavoriteMovie } from './favorite-movies/favorite-movie.entity';
import { HttpModule } from '@nestjs/axios';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';


@Module({
  imports: [
    ConfigModule.forRoot(), 
    HttpModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, FavoriteMovie],
      synchronize: true, 
      ssl: process.env.POSTGRES_SSL === "true",
      extra: {
        ssl:
          process.env.POSTGRES_SSL === "true"
            ? {
              rejectUnauthorized: false ,
            }
            : null
      }
    }),
    TypeOrmModule.forFeature([User]),
    AuthModule,
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
  
})
export class AppModule {}