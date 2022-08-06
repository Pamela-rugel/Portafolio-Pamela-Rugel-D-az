import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBookComponent } from './song-book.component';

describe('SongBookComponent', () => {
  let component: SongBookComponent;
  let fixture: ComponentFixture<SongBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
