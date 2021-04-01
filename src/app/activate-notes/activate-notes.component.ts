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
  is_any_note: boolean = false;

  page_number: number = 0;
  elements_perpage:number = 5;
  pages_to_display:number = 1;
  public pages = [];
  public per_page_list = [5,10,15,20];
  public searchCriteria: string = "";

  active_notes: Note[] = [];

  isDesc: boolean = false;
  column: string = "";

  searchText: string = "";

  constructor(private notesService: NoteService) { }

  ngOnInit(){
    this.getNotes();
    // this.pages_to_display = this.elements_perpage/this.notes.length;
  }


  allNotes() {
    if(this.notes.filter(note => note.title.toLowerCase().indexOf(this.searchText.toLowerCase() ) > -1)){
      this.is_any_note = true;
    }
    return this.notes.filter(note => note.title.toLowerCase().indexOf(this.searchText.toLowerCase() ) > -1)
  }

  getActiveNotes() {
    // this.active_notes = this.notes.filter(note => note.title.toLowerCase().indexOf(this.searchText.toLowerCase() ) > -1)
    // .slice(this.page_number * this.elements_perpage, (+this.page_number + 1) * this.elements_perpage );

    return this.notes.filter(note => note.title.toLowerCase().indexOf(this.searchText.toLowerCase() ) > -1)
    .slice(this.page_number * this.elements_perpage, (+this.page_number + 1) * this.elements_perpage );
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
  
  // toggleDone(id:number) {
  //   console.log("toggle -> ", id, this.notes[id].title)
  //   this.notes[id].completed = !this.notes[id].completed;
  //   this.notesService.updateNote(this.notes[id]).subscribe();
  // }
  // toggleDone(title: string) {
  //   let id = this.notes.findIndex(x => x.title === title)
  //   console.log("toggle -> ", id, this.notes[id].title)
  //   this.notes[id].completed = !this.notes[id].completed;
  //   this.notesService.updateNote(this.notes[id]).subscribe();
  // }
  toggleDone(note: Note) {
    note.completed = !note.completed;
    this.notesService.updateNote(note).subscribe();
  }
  // a = [
  //   {prop1:"abc",prop2:"qwe"},
  //   {prop1:"bnmb",prop2:"yutu"},
  //   {prop1:"zxvz",prop2:"qwrq"}];
  //   index = a. findIndex(x => x. prop2 ==="yutu");
  //   ​
  //   console. log(index);
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
    // this.notesService.addNote( { title: title, content:"" } as Note).
    this.notesService.addNote( { title: title } as Note).
        subscribe(newnote => {
          this.notes.push(newnote);
        })
    this.new_note = "";
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.notes.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }

}
