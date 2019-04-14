import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpViewComponent } from './tp-view.component';

describe('TpViewComponent', () => {
  let component: TpViewComponent;
  let fixture: ComponentFixture<TpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
