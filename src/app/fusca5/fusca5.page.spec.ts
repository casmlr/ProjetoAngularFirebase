import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca5Page } from './fusca5.page';

describe('Fusca5Page', () => {
  let component: Fusca5Page;
  let fixture: ComponentFixture<Fusca5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
