import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MoviesService {
  private readonly apiAccessToken: string = process.env.TMDB_API_ACCESS_TOKEN;
  private readonly baseUrl: string = 'https://api.themoviedb.org/3/movie';

  constructor(private readonly httpService: HttpService) {}

  getPopularMovies(page: number): Observable<any> {
    const url = `${this.baseUrl}/popular?language=en-US&page=${page}`;
    return this.httpService
      .get(url, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.apiAccessToken}`,
        },
      })
      .pipe(map(response => response.data));
  }

  getUpcomingMovies(page: number): Observable<any> {
    const url = `${this.baseUrl}/upcoming?language=en-US&page=${page}`;
    return this.httpService
      .get(url, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.apiAccessToken}`,
        },
      })
      .pipe(map(response => response.data));
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.baseUrl}/${movieId}?language=en-US`;
    return this.httpService
      .get(url, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.apiAccessToken}`,
        },
      })
      .pipe(map(response => response.data));
  }
}
