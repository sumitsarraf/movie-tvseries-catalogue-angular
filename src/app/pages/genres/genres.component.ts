import { Component, OnInit } from '@angular/core';
import { PlayboxService } from 'src/app/services/playbox.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private playboxService: PlayboxService) {}

  ngOnInit(): void {
    this.playboxService.getMoviesGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
  }
}
