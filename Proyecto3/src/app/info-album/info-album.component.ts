import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-album',
  templateUrl: './info-album.component.html',
  styleUrls: ['./info-album.component.css']
})
export class InfoAlbumComponent implements OnInit {
  albums = [
    {
      id: 1,
      image: 'https://i.scdn.co/image/ab67616d0000b273bc5a9722c5109bc725e8e216',
      name: 'Música Electro',
      dateRelease: 2022,
    },
    {
      id: 2,
      image: 'https://i.scdn.co/image/ab6761610000e5eb0f71a52b0520a316b743f048',
      name: 'CASHEW',
      dateRelease: 2021,
    },
    {
      id: 3,
      image: 'https://i.scdn.co/image/ab67616d0000b273ce9cf797464ae0d993473efb',
      name: 'Elektroduendes',
      dateRelease: 2015,
    },
    {
      id: 4,
      image: 'https://i.scdn.co/image/ab6761610000e5eb57ade2dc532431a83b2bf3b7',
      name: 'Electro LatinJazz',
      dateRelease: 2014,
    },
    {
      id: 5,
      image: 'https://i.scdn.co/image/ab6761610000e5ebcfe39467732049bdfdc76a61',
      name: 'Parov Stelar',
      dateRelease: 2012,
    },
    {
      id: 6,
      image: 'https://i.scdn.co/image/ab67616d0000b27343d48a036eb5829a946dd89d',
      name: 'Electro D',
      dateRelease: 2009,
    }
  ]
  artist = {
    image: 'https://i.scdn.co/image/ab6761610000e5eb09bf4814c6585e1f69dfeef7',
    name: 'Avicci'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
