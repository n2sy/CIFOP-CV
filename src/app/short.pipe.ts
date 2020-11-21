import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {

  transform(value: any, taille: number): any {
    if(value.length >= taille) {
      return value.slice(0,taille) + "...";
    }
    //else
      return value;
  }

}
