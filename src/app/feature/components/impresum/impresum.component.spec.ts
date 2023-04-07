import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresumComponent } from './impresum.component';

describe('ImpresumComponent', () => {
  let component: ImpresumComponent;
  let fixture: ComponentFixture<ImpresumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpresumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpresumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
