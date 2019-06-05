import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any): any {
    if(value==0){
      return "out of stock";
    }
    else{
      return "In Stock";
    }
  }

}
