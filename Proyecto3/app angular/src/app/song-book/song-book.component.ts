import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../interfaz/album';
import { AlbumService } from '../servicios/album.service';
import { Song } from '../interfaz/song';

@Component({
  selector: 'app-song-book',
  templateUrl: './song-book.component.html',
  styleUrls: ['./song-book.component.css']
})
export class SongBookComponent implements OnInit {

  songs:any = []

  colabs : string = "Nobody";

  album_info = {
    id: 0,
    id_cantante: 0,
    nombre: '',
    fecha_lanzamiento: '',
    ventas: 0,
    img: ''
  }

  constructor(private album: AlbumService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params["id"]
    this.album.getAlbumsbyId(id).subscribe(respuesta => {
      this.album_info = respuesta as Album;

      //cargar canciones
      let data = respuesta as any;
      let infoSongs = data.canciones;
      for (let i = 0; i < infoSongs.length; i++) {
        this.songs.push(infoSongs[i] as Song);
      }

    })


    this.album.getColabs().subscribe(respuesta => {
      let data = respuesta as any;
      let colabs : any = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].id.toString()  == id.toString()) {
          colabs.push(data[i].artist);
        }
      }
      this.colabs = colabs.join(", ");
    })

  }


}
