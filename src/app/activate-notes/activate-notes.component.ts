import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-activate-notes',
  templateUrl: './activate-notes.component.html',
  styleUrls: ['./activate-notes.component.css']
})
export class ActivateNotesComponent implements OnInit {
  
  notes: Note[] = [];
  public new_note: any;

  page_number: number = 0;
  elements_perpage:number = 3;
  pages_to_display:number = 0;
  public pages = [];
  public searchCriteria: string = "";

  active_notes: Note[] = [];
  constructor(private notesService: NoteService) { }

  ngOnInit(){
    this.getNotes();
    this.pages_to_display = this.notes.length;
  }

  getActiveNotes() {
    return this.notes.slice(this.page_number * this.elements_perpage, (+this.page_number + 1) * this.elements_perpage );
  }

  gotoPage(id:number){
    this.page_number = id;
  }

  addToPages(id:number) {
    this.pages.push(id);
  }
  
  toggleDone(id:number) {
    this.notes[id].completed = !this.notes[id].completed;
    this.notesService.updateNote(this.notes[id]).subscribe();
  }

  getNotes(): void { 
    console.log("get notes method");
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }

  deleteNote(note: Note): void {
    this.notes = this.notes.filter(h => h !== note);
    this.notesService.deleteNote(note).subscribe();
  }

  addNote(name: string): void{
    name = name.trim();
    if(!name) { return; }
    this.notesService.addNote( { name } as Note).
        subscribe(newnote => {
          this.notes.push(newnote);
        })
    this.new_note = "";
  }

}
