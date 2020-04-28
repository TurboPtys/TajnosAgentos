import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodenamesPageComponent } from './codenames-page.component';

describe('CodenamesPageComponent', () => {
  let component: CodenamesPageComponent;
  let fixture: ComponentFixture<CodenamesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodenamesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodenamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
