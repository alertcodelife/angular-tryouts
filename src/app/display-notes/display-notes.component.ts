import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {

  notes: Note[] = [];
  public new_note: any;
  public editbox: boolean = false;

  constructor(private notesService: NoteService) { }

  ngOnInit(){
    console.log("init");
    this.getNotes();
  }

  // toggleDone (id:number) {
  //   this.notes.map((v, i) => {
  //     if(i==id) v.completed = !v.completed;
  //   })
  // }

  toggleDone(id:number) {
    this.notes[id].completed = !this.notes[id].completed;
    this.notesService.updateNote(this.notes[id]).subscribe();
  }

  // getNotes(): void{
  //   console.log("checking: ", this.notes);
  //   this.notesService.getNotes().subscribe((all_notes: Note[]) => this.notes = all_notes
  //   );
  // }

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

  editNote(){
    this.editbox = !this.editbox;
    // this.editbox = true;
  }

  // updateNote(): void {
  //   this.notesService.updateNote(this.notes).subscribe(() => this.goBack());
  // }

}
