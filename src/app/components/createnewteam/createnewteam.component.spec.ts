import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewteamComponent } from './createnewteam.component';

describe('CreatenewteamComponent', () => {
  let component: CreatenewteamComponent;
  let fixture: ComponentFixture<CreatenewteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
