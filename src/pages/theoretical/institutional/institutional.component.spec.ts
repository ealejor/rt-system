import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalComponent } from './institutional.component';

describe('InstitutionalComponent', () => {
  let component: InstitutionalComponent;
  let fixture: ComponentFixture<InstitutionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstitutionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
