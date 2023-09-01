import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca8Page } from './fusca8.page';

describe('Fusca8Page', () => {
  let component: Fusca8Page;
  let fixture: ComponentFixture<Fusca8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
