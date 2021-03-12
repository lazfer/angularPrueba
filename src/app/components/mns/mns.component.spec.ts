import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnsComponent } from './mns.component';

describe('MnsComponent', () => {
  let component: MnsComponent;
  let fixture: ComponentFixture<MnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
