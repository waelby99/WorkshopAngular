import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsappartementComponent } from './detailsappartement.component';

describe('DetailsappartementComponent', () => {
  let component: DetailsappartementComponent;
  let fixture: ComponentFixture<DetailsappartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsappartementComponent]
    });
    fixture = TestBed.createComponent(DetailsappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
