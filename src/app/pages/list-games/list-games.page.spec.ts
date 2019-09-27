import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamesPage } from './list-games.page';

describe('ListGamesPage', () => {
  let component: ListGamesPage;
  let fixture: ComponentFixture<ListGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
