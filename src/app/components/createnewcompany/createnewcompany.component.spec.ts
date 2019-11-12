import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewcompanyComponent } from './createnewcompany.component';

describe('CreatenewteamComponent', () => {
  let component: CreatenewcompanyComponent;
  let fixture: ComponentFixture<CreatenewcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
