import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //ap-key 69fe1a90
  private API_URL: string = 'https://www.omdbapi.com/?apikey=69fe1a90';
  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string){
    return this.http.get(`${this.API_URL}&s=${searchTerm}`);
  }
}