import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value:any[] , query:string): unknown {
    if(!value){
      return value;
    }
    return value.filter(account => account.NumeCuen.toLowerCase().indexOf(query) != -1);
  }

}
