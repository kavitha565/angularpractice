import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodup'
})
export class NodupPipe implements PipeTransform {

  transform(items:any): any {
    if(items && items.length>0){
      return items.filter((item,index)=>items.indexOf(item)==index)
    }
  }

}
