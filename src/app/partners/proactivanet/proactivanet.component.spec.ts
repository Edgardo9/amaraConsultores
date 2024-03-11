import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProactivanetComponent } from './proactivanet.component';

describe('ProactivanetComponent', () => {
  let component: ProactivanetComponent;
  let fixture: ComponentFixture<ProactivanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProactivanetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProactivanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
