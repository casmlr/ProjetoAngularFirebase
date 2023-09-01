import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca2Page } from './fusca2.page';

describe('Fusca2Page', () => {
  let component: Fusca2Page;
  let fixture: ComponentFixture<Fusca2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
