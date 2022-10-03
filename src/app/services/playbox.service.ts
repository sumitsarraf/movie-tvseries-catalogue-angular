import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovideDto, MovieVideoDto } from '../models/movie';
import { of, switchMap } from 'rxjs';
import { GenresDto } from '../models/genre';
import { TvSeriesDto } from '../models/tvseries';

@Injectable({
  providedIn: 'root'
})
export class PlayboxService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '849cb860bed7924a6bf8d362e92ee655';
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovideDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getTvSeries(type: string = 'popular', count: number = 12){
    return this.http.get<TvSeriesDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMoviesGenres() {
    return this.http.get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovideDto>(`${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  searchMovies(page: number) {
    return this.http.get<MovideDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  searchAnyMovie(searchtype: string) {
    return this.http.get<MovideDto>(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${searchtype}&page=1&include_adult=false`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  searchAnyTvSeries(searchtype: string) {
    return this.http.get<TvSeriesDto>(`${this.baseUrl}/search/tv?api_key=${this.apiKey}&language=en-US&query=${searchtype}&page=1&include_adult=false`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  
}
