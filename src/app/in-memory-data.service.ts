import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      {id: 1, content: "Hello World", title: 'Walk', completed: false,editActive:false, barId: 1},
      {id: 2, content: "", title: 'Jog', completed: false,editActive:false, barId: 1},
      {id: 3, content: "", title: 'Play', completed: false,editActive:false, barId: 1},
      {id: 4, content: "", title: 'Yoga', completed: false,editActive:false, barId: 2},
      {id: 5, content: "", title: 'Sleep', completed: false,editActive:false, barId: 1},
      {id: 6, content: "", title: 'Market', completed: false,editActive:false, barId: 1},
      {id: 7, content: "", title: 'Meat', completed: false,editActive:false, barId: 1},
      {id: 8, content: "", title: 'That', completed: false,editActive:false, barId: 3},
      {id: 9, content: "", title: 'Dart', completed: false,editActive:false, barId: 3},
      {id: 10, content: "", title: 'Mellow', completed: false,editActive:false, barId: 3},
      {id: 11, content: "", title: 'Hank', completed: false,editActive:false, barId: 1},
      {id: 12, content: "", title: 'Part', completed: false,editActive:false, barId: 1}
  ];
  return {notes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
  }
}
