import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums = [
    {
      id: 1,
      image: 'https://i.scdn.co/image/ab67616d0000b273bc5a9722c5109bc725e8e216',
      name: 'La Mejor Música Electrónica',
    },
    {
      id: 2,
      image: 'https://i.scdn.co/image/ab6761610000e5eb0f71a52b0520a316b743f048',
      name: 'CASHEW',
    },
    {
      id: 3,
      image: 'https://i.scdn.co/image/ab67616d0000b273ce9cf797464ae0d993473efb',
      name: 'Elektroduendes',
    },
    {
      id: 4,
      image: 'https://i.scdn.co/image/ab6761610000e5eb57ade2dc532431a83b2bf3b7',
      name: 'Electro LatinJazz Orchestra',
    },
    {
      id: 5,
      image: 'https://i.scdn.co/image/ab6761610000e5ebcfe39467732049bdfdc76a61',
      name: 'Parov Stelar',
    },
    {
      id: 6,
      image: 'https://i.scdn.co/image/ab67616d0000b27343d48a036eb5829a946dd89d',
      name: 'Electro D',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
