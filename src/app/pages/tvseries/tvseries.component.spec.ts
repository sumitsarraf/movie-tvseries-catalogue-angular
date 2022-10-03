/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TvseriesComponent } from './tvseries.component';

describe('TvseriesComponent', () => {
  let component: TvseriesComponent;
  let fixture: ComponentFixture<TvseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
