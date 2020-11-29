import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhManagerComponent } from './rh-manager.component';

describe('RhManagerComponent', () => {
  let component: RhManagerComponent;
  let fixture: ComponentFixture<RhManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
