import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpListComponent } from './tp-list.component';

describe('TpListComponent', () => {
  let component: TpListComponent;
  let fixture: ComponentFixture<TpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
