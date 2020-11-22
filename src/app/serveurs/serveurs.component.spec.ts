import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeursComponent } from './serveurs.component';

describe('ServeursComponent', () => {
  let component: ServeursComponent;
  let fixture: ComponentFixture<ServeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
