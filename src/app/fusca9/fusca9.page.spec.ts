import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca9Page } from './fusca9.page';

describe('Fusca9Page', () => {
  let component: Fusca9Page;
  let fixture: ComponentFixture<Fusca9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
