import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpEditComponent } from './tp-edit.component';

describe('TpEditComponent', () => {
  let component: TpEditComponent;
  let fixture: ComponentFixture<TpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
