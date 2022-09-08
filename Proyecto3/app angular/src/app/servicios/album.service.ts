import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get('http://localhost:3000/api/albums')
  }

  getAlbumsbyId(id: number) {
    return this.http.get('http://localhost:3000/api/albums/'+id.toString())
  }

  getColabs() {
    return this.http.get('https://proyecto-3de10-default-rtdb.firebaseio.com/datos.json')
  }
}
