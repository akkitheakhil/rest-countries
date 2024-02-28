import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingListPageComponent } from './landing-list-page.component';

describe('LandingListPageComponent', () => {
  let component: LandingListPageComponent;
  let fixture: ComponentFixture<LandingListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
