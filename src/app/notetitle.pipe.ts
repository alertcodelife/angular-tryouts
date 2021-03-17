import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './note';
@Pipe({ name: 'notetitlefilter' })
export class notetitlePipe implements PipeTransform {
  transform(notes: Note[], searchText: string): Note[] {
    // if (searchText == null) return notes;
    if(!notes || !searchText){
      return notes;
    }
    return notes.filter( note => note.title.toLowerCase().indexOf(searchText.toLowerCase() ) > -1 ); 
      
    //   function (category) {
    //   return category.CategoryName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    // }
    
  }
}