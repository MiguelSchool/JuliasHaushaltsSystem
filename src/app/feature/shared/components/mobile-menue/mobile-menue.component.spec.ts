import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenueComponent } from './mobile-menue.component';

describe('MobileMenueComponent', () => {
  let component: MobileMenueComponent;
  let fixture: ComponentFixture<MobileMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MobileMenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
