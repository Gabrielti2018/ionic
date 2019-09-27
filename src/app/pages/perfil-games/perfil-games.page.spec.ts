import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilGamesPage } from './perfil-games.page';

describe('PerfilGamesPage', () => {
  let component: PerfilGamesPage;
  let fixture: ComponentFixture<PerfilGamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilGamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
