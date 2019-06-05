import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status2'
})
export class Status2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
