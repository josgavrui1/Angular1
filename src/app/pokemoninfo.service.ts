import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PokemonInfo } from './pokemoninfo';
import { PokemonType } from './pokemontype';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PokemonInfoService {
  constructor(public http: Http) {}
  getInfo(): Observable<PokemonInfo[]> {
    /*return this.http.get('assets/test.json')
               .toPromise()
               .then((response:any) => response.json() as PokemonInfo[]).catch(this.handleError);*/
     return this.http.request('http://localhost:8000/pokemon.json')
                 .map(res => res.json());
    //return Promise.resolve(fakeJSON);
    /*return fakeJSON;*/
  }

  /*getPokemon(id: number) {
    return this.http.get('http://localhost:3001/heroes/' + id + '.json')
               .toPromise()
               .then((response:any) => response.json() as Hero);
  }*/
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getPokemon(id:number):PokemonInfo{
    return POKEINFO.filter(pokemon => {
    return pokemon.number==id;})[0];
  }
}

export const POKEINFO: PokemonInfo[] = [
  {number: 1, name: 'Bulbasaur', description: 'Description', ps:45, atk:49, df:49, spAtk:65, spDef:65, spe:45, type1:"Grass", type2:"Poison"},
  {number: 4, name: 'Charmander', description: 'Description', ps:39, atk:52, df:43, spAtk:60, spDef:50, spe:65, type1:"Fire", type2:null},
  {number: 7, name: 'Squirtle', description: 'Description', ps:44, atk:48, df:65, spAtk:50, spDef:64, spe:43, type1:"Water", type2:null}
    
];

export const fakeJSON:PokemonInfo[]=[{"name":"Bulbasaur","description":"#001 Bulbasaur es un Pokémon tipo planta/veneno introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Squirtle y Charmander (excepto en Pokémon Amarillo). Destaca por ser el primer Pokémon de la Pokédex Nacional.","number":1,"ps":45,"atk":49,"df":49,"spAtk":65,"spDef":65,"spe":45,"type1":"Grass","type2":"Poison"},{"name":"Ivysaur","description":"#002 Ivysaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es la evolución de Bulbasaur, uno de los Pokémon iniciales de Kanto.","number":2,"ps":60,"atk":62,"df":63,"spAtk":80,"spDef":80,"spe":60,"type1":"Grass","type2":"Poison"},{"name":"Venusaur","description":"#003 Venusaur es un Pokémon de tipo planta/veneno introducido en la primera generación. Es la evolución de Ivysaur y, a partir de la sexta generación, puede megaevolucionar en Mega-Venusaur.","number":3,"ps":80,"atk":82,"df":83,"spAtk":100,"spDef":100,"spe":80,"type1":"Grass","type2":"Poison"},{"name":"Charmander","description":"#004 Charmander es un Pokémon de tipo fuego introducido en la primera generación. Es uno de los Pokémon iniciales que pueden elegir los entrenadores que empiezan su aventura en la región Kanto, junto a Bulbasaur y Squirtle, excepto en Pokémon Amarillo.","number":4,"ps":39,"atk":52,"df":43,"spAtk":60,"spDef":50,"spe":65,"type1":"Fire","type2":"null"},{"name":"Charmeleon","description":"#005 Charmeleon es un Pokémon de tipo fuego introducido en la primera generación. Es la evolución de Charmander, uno de los Pokémon iniciales de los entrenadores que comienzan su aventura en la región de Kanto.","number":5,"ps":58,"atk":64,"df":58,"spAtk":80,"spDef":65,"spe":80,"type1":"Fire","type2":"null"},{"name":"Charizard","description":"#006 Charizard es un Pokémon de tipo fuego/volador, introducido en la primera generación. Es la evolución de Charmeleon y, a partir de la sexta generación, puede megaevolucionar en Mega-Charizard X o en Mega-Charizard Y.","number":6,"ps":78,"atk":84,"df":78,"spAtk":109,"spDef":85,"spe":100,"type1":"Fire","type2":"Flying"}];