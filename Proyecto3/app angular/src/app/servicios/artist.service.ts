import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get('http://localhost:3000/api/artists')
  }

  getArtistsbyId(id: number) {
    return this.http.get('http://localhost:3000/api/artists/'+id.toString())
  }

  getArtistsbyGenre(genre: string) {
    return this.http.get('http://localhost:3000/api/artists/genre/'+genre)
  }

  getGenres() {
    return this.http.get('http://localhost:3000/api/genres')
  }

  getBirthday(id: number) {
    return this.http.get(`https://proyecto-3de10-default-rtdb.firebaseio.com/fechas.json?orderBy=%22id%22&equalTo=`+id.toString())
  }

}
