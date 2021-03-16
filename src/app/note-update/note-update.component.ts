import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.css']
})
export class NoteUpdateComponent implements OnInit {

  note: Note;
  constructor(private notesService: NoteService,
                private route: ActivatedRoute, 
                private location: Location) { }

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.notesService.getNote(id).
              subscribe(note => this.note = note);
  }

  goBack():void {
    this.location.back();
  }

  save(): void {
    this.notesService.updateNote(this.note).subscribe(() => this.goBack());
  }

}
