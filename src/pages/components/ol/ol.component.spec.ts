import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlComponent } from './ol.component';

describe('OlComponent', () => {
  let component: OlComponent;
  let fixture: ComponentFixture<OlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
