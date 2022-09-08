import { Component, OnInit } from '@angular/core';
import { Artist } from '../interfaz/artist';
import { ArtistService } from '../servicios/artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  listArtists: any = [];
  genres: any = [];

  constructor(private artist: ArtistService) {
  }

  ngOnInit(): void {

    this.artist.getArtists().subscribe(respuesta => {
      let data = respuesta as any;
      this.guardarDatos(data);
    })
    this.cargarGeneros();

    }


  guardarDatos(data:any): void {
    for (let i = 0; i < data.length; i++) {
      this.listArtists.push(data[i] as Artist);
    }
  }

  cambiar(genero: string): void {
    this.listArtists = [];
    this.artist.getArtistsbyGenre(genero).subscribe(respuesta => {
      let data = respuesta as any;
      this.guardarDatos(data);
    })
  }

  cargarGeneros(): void {
    this.artist.getGenres().subscribe(respuesta => {
      let data = respuesta as any;
      for (let i = 0; i < data.length; i++) {
        if (!this.genres.includes(data[i].genero)) {
          this.genres.push(data[i].genero);
        }
      }
    });
  }

}
