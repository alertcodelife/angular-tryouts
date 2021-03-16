import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes = [
      {id: 1, name: 'Walk', completed: false},
      {id: 2, name: 'Jog', completed: false},
      {id: 3, name: 'Play', completed: false},
      {id: 4, name: 'Yoga', completed: false}
  ];
  return {notes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
  }
}
