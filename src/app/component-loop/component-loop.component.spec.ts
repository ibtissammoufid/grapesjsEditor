import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLoopComponent } from './component-loop.component';

describe('ComponentLoopComponent', () => {
  let component: ComponentLoopComponent;
  let fixture: ComponentFixture<ComponentLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
