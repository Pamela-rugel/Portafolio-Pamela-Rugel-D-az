import { Component, OnInit } from '@angular/core';
import { Artist } from '../interfaz/artist';
import { Album } from '../interfaz/album';
import { ArtistService } from '../servicios/artist.service';
import { AlbumService } from '../servicios/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-album',
  templateUrl: './info-album.component.html',
  styleUrls: ['./info-album.component.css']
})
export class InfoAlbumComponent implements OnInit {

  date: string = "0000-00-00";

  albums: any = [];

  infoArtist: Artist = {
    id: 0,
    nombre: "",
    pais: "",
    edad: 0,
    genero: "",
    img: "",
  };


  constructor(private artist: ArtistService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let params = this.activatedRoute.snapshot.params;
    let id = params["id"]
    this.artist.getArtistsbyId(id).subscribe(respuesta => {
      this.infoArtist = respuesta as Artist;

      let data = respuesta as any;
      let infoAlbums = data.albums;
      for (let i = 0; i < infoAlbums.length; i++) {
        this.albums.push(infoAlbums[i] as Album);
      }

    })

    this.artist.getBirthday(id).subscribe(respuesta => {
      let dato = respuesta as any;
      let fecha = dato[id-1].fechaNacimiento.split("T");
      this.date = fecha[0];
    console.log(this.date);
    })
  }

}
