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
  elements_perpage:number = 5;
  pages_to_display:number = 1;
  public pages = [];
  public per_page_list = [5,10,15,20];
  public searchCriteria: string = "";

  active_notes: Note[] = [];
  constructor(private notesService: NoteService) { }

  ngOnInit(){
    this.getNotes();
    // this.pages_to_display = this.elements_perpage/this.notes.length;
  }

  getActiveNotes() {
    return this.notes.slice(this.page_number * this.elements_perpage, (+this.page_number + 1) * this.elements_perpage );
  }

  gotoPage(id:number){
    this.page_number = id;
  }

  addToPages() {
    // console.log("notes length:",this.notes.length);
    // console.log("adding values: ", this.pages);
    // console.log("elements perpage: ", this.elements_perpage);
    // console.log("pages to display: ", this.pages_to_display);
    this.pages = [];
    // this.pages.push(id);
    this.pages_to_display = this.notes.length/this.elements_perpage;
    for (let i = 1; i < (+this.pages_to_display + 1); i++) {
      this.pages.push(i);
    }
    // this.gotoPage(1);
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

  addNote(title: string): void{
    title = title.trim();
    if(!title) { return; }
    this.notesService.addNote( { title: title, content:"" } as Note).
        subscribe(newnote => {
          this.notes.push(newnote);
        })
    this.new_note = "";
  }

}
