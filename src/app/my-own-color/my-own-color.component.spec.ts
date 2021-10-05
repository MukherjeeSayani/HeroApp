import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnColorComponent } from './my-own-color.component';

describe('MyOwnColorComponent', () => {
  let component: MyOwnColorComponent;
  let fixture: ComponentFixture<MyOwnColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOwnColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOwnColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
