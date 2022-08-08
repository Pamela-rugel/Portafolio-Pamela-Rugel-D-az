import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  selectedValue = '';
  listArtists = [
    {
      value: 1,
      image: 'https://i.scdn.co/image/ab6761610000e5ebc5ceb05f152103b2b70d3b07',
      label: 'deadmau5'
    },
    {
      value: 2,
      image: 'https://i.scdn.co/image/ab6761610000e5eb09bf4814c6585e1f69dfeef7',
      label: 'Avicii'
    },
    {
      value: 3,
      image: 'https://i.scdn.co/image/2f0c6c465a83cd196e651e3d4e7625ba799a6f60',
      label: 'Ratatat'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
