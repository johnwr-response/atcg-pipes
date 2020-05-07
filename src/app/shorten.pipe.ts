import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

  // transform(value: any) {}
  // transform(value: any, ...args: any[]): any {}
  transform(value: any, limit: number): any {
    if (value.length > limit) {
      return value.substr(0,limit) + ' ...';
    }
    return value;
  }

}
