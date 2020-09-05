import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistationpageComponent } from './registationpage.component';

describe('RegistationpageComponent', () => {
  let component: RegistationpageComponent;
  let fixture: ComponentFixture<RegistationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
