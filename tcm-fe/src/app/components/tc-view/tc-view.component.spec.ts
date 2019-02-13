import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcViewComponent } from './tc-view.component';

describe('TcViewComponent', () => {
  let component: TcViewComponent;
  let fixture: ComponentFixture<TcViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
