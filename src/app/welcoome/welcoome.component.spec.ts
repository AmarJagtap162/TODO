import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcoomeComponent } from './welcoome.component';

describe('WelcoomeComponent', () => {
  let component: WelcoomeComponent;
  let fixture: ComponentFixture<WelcoomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcoomeComponent]
    });
    fixture = TestBed.createComponent(WelcoomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
