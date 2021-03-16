import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateNotesComponent } from './activate-notes/activate-notes.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { GridNotesComponent } from './grid-notes/grid-notes.component';
import { NoteUpdateComponent } from './note-update/note-update.component';

const routes: Routes = [
  { path: '', redirectTo:'', pathMatch: 'full'},
  // { path: 'displayNotes',component: DisplayNotesComponent},
  { path: 'displayNotes',component: ActivateNotesComponent},
  { path: 'update/:id', component: NoteUpdateComponent },
  { path: 'GridNotes', component: GridNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DisplayNotesComponent,
                                  ActivateNotesComponent,
                                  NoteUpdateComponent,
                                  GridNotesComponent]
