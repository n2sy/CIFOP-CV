import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './model/server';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(value: Server[], filtredStatus : string): any {
    if(filtredStatus.length == 0)
      return value;
    else {
      let newServers : Server[] = [];
      for(let s of value) {
        if(s["status"] == filtredStatus)
          newServers.push(s);
      }
      return newServers;
    }
  }

}
