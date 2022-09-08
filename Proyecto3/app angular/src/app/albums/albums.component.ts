import { Component, OnInit } from '@angular/core';
import { Album } from '../interfaz/album';
import { AlbumService } from '../servicios/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : any = []

  constructor(private album: AlbumService) { }

  ngOnInit(): void {
    this.album.getAlbums().subscribe(respuesta => {
      let data = respuesta as any;
      for (let i = 0; i < data.length; i++) {
        this.albums.push(data[i] as Album);
      }
    })
  }
}
