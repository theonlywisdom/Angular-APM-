import { Pipe, PipeTransform } from '@angular/core';

// pipe decorator
@Pipe ({
  name: 'convertToSpaces' //the name of the pipe to reference in html
})
//custom pipe class to convert characters to spaces
// which implements the pipeTransform interface
export class ConvertToSpacesPipe implements PipeTransform {
  /* transform method for the ConvertToSpaces class
   which replaces a specified character with a space*/
  transform (value: string, character: string): string{
    return value.replace(character, ' ');
  }
}