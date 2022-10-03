import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Movie } from '../../models/movie';
import { PlayboxService } from 'src/app/services/playbox.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genreId: string | null = null;

  constructor(private playboxService: PlayboxService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.genreId = genreId;
        this.getMoviesByGenre(genreId, 1);
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(page: number) {
    this.playboxService.searchMovies(page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getMoviesByGenre(genreId: string, page: number) {
    this.playboxService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}
