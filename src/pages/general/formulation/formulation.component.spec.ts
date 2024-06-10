import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulationComponent } from './formulation.component';

describe('FormulationComponent', () => {
  let component: FormulationComponent;
  let fixture: ComponentFixture<FormulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
