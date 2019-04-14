import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpCreateComponent } from './tp-create.component';

describe('TpCreateComponent', () => {
  let component: TpCreateComponent;
  let fixture: ComponentFixture<TpCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
