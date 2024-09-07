import { EntityRepository, Repository } from 'typeorm';
import { FavoriteMovie } from './favorite-movie.entity';

@EntityRepository(FavoriteMovie)
export class FavoriteMovieRepository extends Repository<FavoriteMovie> {}
