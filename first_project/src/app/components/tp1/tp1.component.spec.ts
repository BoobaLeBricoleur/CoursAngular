import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tp1Component } from './tp1.component';

describe('Tp1Component', () => {
  let component: Tp1Component;
  let fixture: ComponentFixture<Tp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
