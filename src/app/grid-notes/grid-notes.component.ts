import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-grids';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-grid-notes',
  templateUrl: './grid-notes.component.html',
  styleUrls: ['./grid-notes.component.css']
})
export class GridNotesComponent implements OnInit {

  notes: Note[] = [];
  width:string;

  public pageSettings: PageSettingsModel = { pageSize: 6};
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    console.log("notes: " , this.notes);
    this.getNotes();
  }

  getNotes(){
    console.log("notes: " , this.notes);
    this.noteService.getNotes().subscribe(notes => this.notes = notes);
    console.log("notes: " , this.notes);
  }
}
