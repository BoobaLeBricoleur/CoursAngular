import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxiemeTrucComponent } from './deuxieme-truc.component';

describe('DeuxiemeTrucComponent', () => {
  let component: DeuxiemeTrucComponent;
  let fixture: ComponentFixture<DeuxiemeTrucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeuxiemeTrucComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeuxiemeTrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
