import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementComponent } from './appartement.component';

describe('AppartementComponent', () => {
  let component: AppartementComponent;
  let fixture: ComponentFixture<AppartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppartementComponent]
    });
    fixture = TestBed.createComponent(AppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
