import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvantiComponent } from './ivanti.component';

describe('IvantiComponent', () => {
  let component: IvantiComponent;
  let fixture: ComponentFixture<IvantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvantiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IvantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
