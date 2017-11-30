import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rlaPrint'
})
export class RlaPrintPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value + ' Rajesh');
    return value;
  }

}
