export interface TvSeries {
    backdrop_path: string;
    first_air_date:string;
    genre_ids: number[];
    id: number;
    original_language: string;
    origin_country: string;
    name: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count:number;
  }

  export interface TvSeriesDto {
    page: number;
    results: TvSeries[];
    total_results: number;
    total_pages: number;
  }