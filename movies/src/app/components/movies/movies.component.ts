import { Component } from '@angular/core';
import { concatMapTo } from 'rxjs';
import { MovieService } from 'src/app/serices/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent  {
  movies:any[] = [];
  constructor(private movieService : MovieService) {}
  ngOnInit(): void {
  }

  data:any
  getMovies(searchTerm: string) {
    this.movieService.getMovies(searchTerm).subscribe(data => {
      this.data = data
      this.movies = this.data.Search;
      console.log (this.movies)
    })
  }
  
}

