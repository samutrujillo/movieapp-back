import { Controller, Get, Query, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('get-movies')
  getMovies(@Query('page') page: string) {
    const pageNumber = parseInt(page, 10) || 1;
    return this.moviesService.getPopularMovies(pageNumber);
  }

  @Get('get-released-soon')
  getReleasedSoon(@Query('page') page: string) {
    const pageNumber = parseInt(page, 10) || 1;
    return this.moviesService.getUpcomingMovies(pageNumber);
  }

  @Get('get-details/:id')
  getMovieDetails(@Param('id') id: string) {
    const movieId = parseInt(id, 10);
    return this.moviesService.getMovieDetails(movieId);
  }
}
