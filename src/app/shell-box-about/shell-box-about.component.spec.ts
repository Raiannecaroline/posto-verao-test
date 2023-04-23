import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellBoxAboutComponent } from './shell-box-about.component';

describe('ShellBoxAboutComponent', () => {
  let component: ShellBoxAboutComponent;
  let fixture: ComponentFixture<ShellBoxAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellBoxAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellBoxAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
