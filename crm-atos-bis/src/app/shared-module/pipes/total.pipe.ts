import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    if(value){
      //To avoid bug when there is no value
      console.log(value);
      console.log(args);
      if(args)
        return value.totalHt();
      else
        return value.totalTtc();
    }
    return null;
  }

}
