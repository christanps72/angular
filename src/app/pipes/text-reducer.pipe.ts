import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textReducer',
})
export class TextReducerPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    // console.log(args, 'args');
    let newValue = value.substr(0, 3) + '...';

    return newValue;
  }
}
