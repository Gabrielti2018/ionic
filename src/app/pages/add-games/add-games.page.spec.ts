import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGamesPage } from './add-games.page';

describe('AddGamesPage', () => {
  let component: AddGamesPage;
  let fixture: ComponentFixture<AddGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
