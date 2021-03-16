import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Note } from './note';
import { catchError, tap } from 'rxjs/operators';
import { Notes } from './primary-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'api/notes';

  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  // getNotes(): Observable<Note[]> {
  //   const notes = of(Notes);
  //   return notes;
  // }

  // getNotes():Observable<Note[]> {
  //   return this.http.get<Note[]>(this.notesUrl).
  //             pipe(
  //               catchError(this.errorHandler)
  //             )
  // }

  getNotes(): Observable<Note[]> {
    console.log("service notes");
    return this.http.get<Note[]>(this.notesUrl)
      .pipe(
        tap(_ => this.log('fetched notes')),
        catchError(this.errorHandler<Note[]>('getNotes', []))
      );
  }

  getNote(id: number): Observable<Note> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => this.log(`fetched note id`)),
      catchError(this.errorHandler<Note>(`Note id=${id}`))
    );
  }

  // getNotes(): Observable<Note[]> {
  //   return this.http.get<Note[]>(this.notesUrl + '/displayNotes/')
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }

  addNote(note:Note): Observable<Note> {
    note.completed = false;
    return this.http.post<Note>(this.notesUrl, note,this.httpOptions).pipe(
      tap((newNote: Note) => this.log(`Added`)),
      catchError(this.errorHandler<Note>('addNote'))
    );
  }

  // deleteNote(note_name) {
  //   return this.http.delete<Note>(this.notesUrl + '/notes/' + note_name, this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
  deleteNote(note: Note | number): Observable<Note> {
    const id = typeof note === 'number' ? note : note.id;
    const url = `${this.notesUrl}/${id}`;

    return this.http.delete<Note>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted note id=${id}`)),
      catchError(this.errorHandler<Note>('delete note'))
    );
  }

  updateNote(note: Note): Observable<any> {
    return this.http.put(this.notesUrl, note, this.httpOptions).pipe(
      tap(_ => this.log(`updated note id=${note.id}`)),
      catchError(this.errorHandler<any>('updateNote'))
    );
  }

  // update(id, note): Observable<Note> {
  //   return this.http.put<Note>(this.notesUrl + '/notes/' + id, JSON.stringify(note), this.httpOptions)
  //   .pipe(
  //     catchError(this.errorHandler)
  //   )
  // }
  
  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log("log");
  }
}