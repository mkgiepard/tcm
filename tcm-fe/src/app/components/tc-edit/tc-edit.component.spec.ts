import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcEditComponent } from './tc-edit.component';

describe('TcEditComponent', () => {
  let component: TcEditComponent;
  let fixture: ComponentFixture<TcEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
