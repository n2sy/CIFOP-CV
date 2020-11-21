import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerServersComponent } from './manager-servers.component';

describe('ManagerServersComponent', () => {
  let component: ManagerServersComponent;
  let fixture: ComponentFixture<ManagerServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
