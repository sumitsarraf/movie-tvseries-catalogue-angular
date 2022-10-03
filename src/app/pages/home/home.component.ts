import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { PlayboxService } from 'src/app/services/playbox.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topratedMovies: Movie[] = [];
  constructor(private playboxService: PlayboxService) {}

  ngOnInit(): void {
    this.playboxService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.playboxService.getMovies('top_rated').subscribe((movies) => {
      this.topratedMovies = movies;
    });
    this.playboxService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }
}
