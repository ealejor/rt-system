import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseComponent } from './usecase.component';

describe('UsecaseComponent', () => {
  let component: UsecaseComponent;
  let fixture: ComponentFixture<UsecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsecaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
