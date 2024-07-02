import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(ch:string) {
        let resultat = '';
        for(let i of ch) {
            switch(i.toLowerCase()) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    resultat += '*';
                    break;
                default:
                    resultat += i;
            }
        }
        return resultat;
    }
  }


