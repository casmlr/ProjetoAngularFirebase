import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca3Page } from './fusca3.page';

describe('Fusca3Page', () => {
  let component: Fusca3Page;
  let fixture: ComponentFixture<Fusca3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
