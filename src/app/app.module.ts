import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ModalModule } from './_modal';
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// import { GridNotesComponent } from './grid-notes/grid-notes.component';
// import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { GridModule, PagerModule, PageService, SortService, FilterService } from '@syncfusion/ej2-angular-grids';
import { NoteService } from './note.service';
import { NoteUpdateComponent } from './note-update/note-update.component';
import { notetitlePipe } from './notetitle.pipe';
// import { ActivateNotesComponent } from './activate-notes/activate-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NoteUpdateComponent,
    notetitlePipe
    // ActivateNotesComponent,
    // GridNotesComponent
    // DisplayNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // CKEditorModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
    GridModule,PagerModule
  ],
  providers: [NoteService, PageService,SortService, FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
