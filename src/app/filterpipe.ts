import {Pipe, PipeTransform} from '@angular/core';
import { PokemonInfo } from './pokemoninfo';

@Pipe({
    name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform{
    transform(value, args?):PokemonInfo[]{
        let [text]=args;
        console.log(text)
        return value.filter(pokemon => {
            return pokemon.name.indexOf(text)>=0;
        });
    }
}