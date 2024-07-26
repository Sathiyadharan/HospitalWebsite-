import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any,args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args=args.toLowerCase();
    return value.filter(function(admin:any){
      return JSON.stringify(admin).toLowerCase().includes(args);

    })
  }

}
