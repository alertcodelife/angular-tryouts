import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridNotesComponent } from './grid-notes.component';

describe('GridNotesComponent', () => {
  let component: GridNotesComponent;
  let fixture: ComponentFixture<GridNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
