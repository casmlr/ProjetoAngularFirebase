import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesVeiculoPage } from './detalhes-veiculo.page';

describe('DetalhesVeiculoPage', () => {
  let component: DetalhesVeiculoPage;
  let fixture: ComponentFixture<DetalhesVeiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalhesVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
