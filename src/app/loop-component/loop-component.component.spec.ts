import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopComponentComponent } from './loop-component.component';

describe('LoopComponentComponent', () => {
  let component: LoopComponentComponent;
  let fixture: ComponentFixture<LoopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
