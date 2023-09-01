import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Fusca1Page } from './fusca1.page';

describe('Fusca1Page', () => {
  let component: Fusca1Page;
  let fixture: ComponentFixture<Fusca1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Fusca1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
