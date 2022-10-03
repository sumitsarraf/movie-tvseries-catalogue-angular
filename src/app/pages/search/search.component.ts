import { TvSeries } from './../../models/tvseries';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { PlayboxService } from 'src/app/services/playbox.service';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  options: FormGroup;
  moviesSearchResult: Movie[] = [];
  tvSearchResult: TvSeries[] = [];

  imagesSizes = IMAGES_SIZES;
  showResult = false;
  errorResult = false;
  constructor(fb: FormBuilder, private playboxService: PlayboxService) {
    this.options = fb.group({
      name: ['', Validators.required]
    });
  }


  ngOnInit() {

  }


  
  searchMovies(){
    console.log(this.options.controls['name'].value);
    if(this.options.controls['name'].value != ''){
      this.playboxService.searchAnyMovie(this.options.controls['name'].value).subscribe((movies) => {
        this.showResult =true;
        if(movies.length != 0){
          this.moviesSearchResult = movies;
          this.errorResult = false;
        }else{
          this.errorResult = true;
          	
        }
      });
    }else{
      alert("Please enter search text..")
    }
  }

  searchTvSeries(){
    console.log(this.options.controls['name'].value);
    if(this.options.controls['name'].value != ''){
      this.playboxService.searchAnyTvSeries(this.options.controls['name'].value).subscribe((tv) => {
        this.showResult =true;
        if(tv.length != 0){
          this.tvSearchResult = tv;
          this.errorResult = false;
        }else{
          this.errorResult = true;
          	
        }
      });
    }else{
      alert("Please enter search text..")
    }
  }

}
