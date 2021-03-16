import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateNotesComponent } from './activate-notes.component';

describe('ActivateNotesComponent', () => {
  let component: ActivateNotesComponent;
  let fixture: ComponentFixture<ActivateNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
