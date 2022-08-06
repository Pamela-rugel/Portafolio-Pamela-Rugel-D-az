import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAlbumComponent } from './info-album.component';

describe('InfoAlbumComponent', () => {
  let component: InfoAlbumComponent;
  let fixture: ComponentFixture<InfoAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
