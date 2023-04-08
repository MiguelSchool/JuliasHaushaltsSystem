import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCustomizedMenueComponent } from './btn-customized-menue.component';

describe('BtnCustomizedMenueComponent', () => {
  let component: BtnCustomizedMenueComponent;
  let fixture: ComponentFixture<BtnCustomizedMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BtnCustomizedMenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCustomizedMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
