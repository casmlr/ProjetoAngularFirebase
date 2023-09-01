import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca4Page } from './fusca4.page';

describe('Fusca4Page', () => {
  let component: Fusca4Page;
  let fixture: ComponentFixture<Fusca4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
