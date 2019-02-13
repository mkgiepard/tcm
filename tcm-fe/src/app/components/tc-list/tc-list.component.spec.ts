import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcListComponent } from './tc-list.component';

describe('TcListComponent', () => {
  let component: TcListComponent;
  let fixture: ComponentFixture<TcListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
