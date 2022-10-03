import { Component, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';

import { TvSeries } from 'src/app/models/tvseries';
import { PlayboxService } from 'src/app/services/playbox.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.css']
})
export class TvseriesComponent implements OnInit {
  popularTvSeries: TvSeries[] = [];
  topRatedTvSeries: TvSeries[] = [];
  releasingTodayTvSeries: TvSeries[] = [];

  imagesSizes = IMAGES_SIZES;
  constructor(private playboxService: PlayboxService) {}

  ngOnInit(): void {
    this.playboxService.getTvSeries('popular').subscribe((data) => {
      this.popularTvSeries = data;
      console.log("sdrfwewerre"+this.popularTvSeries);
    });
    this.playboxService.getTvSeries('top_rated').subscribe((data) => {
      this.topRatedTvSeries = data;
      console.log("sdrfwewerre"+this.topRatedTvSeries);
    });
    this.playboxService.getTvSeries('airing_today').subscribe((data) => {
      this.releasingTodayTvSeries = data;
      console.log("sdrfwewerre"+this.releasingTodayTvSeries);
    });
  }
}