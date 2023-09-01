import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca6Page } from './fusca6.page';

describe('Fusca6Page', () => {
  let component: Fusca6Page;
  let fixture: ComponentFixture<Fusca6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
