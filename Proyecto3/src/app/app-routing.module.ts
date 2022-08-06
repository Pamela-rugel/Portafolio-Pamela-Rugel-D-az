import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';
import { SongBookComponent } from './song-book/song-book.component';
import { InfoAlbumComponent } from './info-album/info-album.component';

const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "artists", component: ArtistsComponent},
    { path: "albums", component: AlbumsComponent},
    { path: "song-book", component: SongBookComponent},
    { path: "info-album", component: InfoAlbumComponent},
    { path: "**", redirectTo: "login" }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
