import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcCreateComponent } from './tc-create.component';

describe('TcCreateComponent', () => {
  let component: TcCreateComponent;
  let fixture: ComponentFixture<TcCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
