import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any): any {
    // if(value == null)
    if(!value)
      return "avatar.jpg";
    else
      return value;

  }

}
