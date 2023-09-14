import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
@Input('movie') movie: any;

constructor(){}

ngOnInit(): void{
}

getImagen(){
if (this.movie.Poster === 'N/A') {
  return 'https://via.placeholder.com/600';
}else{
  return this.movie.Poster;
}
}
}
