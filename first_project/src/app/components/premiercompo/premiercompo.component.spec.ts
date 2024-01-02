import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiercompoComponent } from './premiercompo.component';

describe('PremiercompoComponent', () => {
  let component: PremiercompoComponent;
  let fixture: ComponentFixture<PremiercompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiercompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiercompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
