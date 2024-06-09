import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionComponent } from './tuition.component';

describe('TuitionComponent', () => {
  let component: TuitionComponent;
  let fixture: ComponentFixture<TuitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
