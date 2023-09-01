import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca7Page } from './fusca7.page';

describe('Fusca7Page', () => {
  let component: Fusca7Page;
  let fixture: ComponentFixture<Fusca7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
