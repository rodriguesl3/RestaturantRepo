/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalItemComponent } from './modal-item.component';

describe('ModalItemComponent', () => {
  let component: ModalItemComponent;
  let fixture: ComponentFixture<ModalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
