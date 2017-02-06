import { Component,Input, OnInit,trigger,state,style,transition,animate } from '@angular/core';
import { PokemonInfo } from './pokemoninfo';
import { Router } from '@angular/router';
import { PokemonInfoService } from './pokemoninfo.service';

@Component({
  moduleId:module.id,
  selector: 'pokeinfo',
  templateUrl: './pokeinfo.component.html',
  animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
]
})
export class PokeInfoComponent implements OnInit{
    lista:PokemonInfo[];
    filtrada:PokemonInfo[];
    selected:PokemonInfo=null;
    @Input()
    private texto:string;

    constructor(private router: Router, private pokemonInfoService:PokemonInfoService){}

    loadData():void{
        this.texto="";
        this.pokemonInfoService.getInfo()
                           .subscribe(
                               pokemon => {this.lista = pokemon; this.filtrada=this.lista.slice()}, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
        /*this.pokemonInfoService.getInfo().then(objetos => this.lista=objetos);
        //.then(lista => this.lista = lista);
        for (let elem of this.lista){
            console.log(elem.name);
        }*/
        //this.filtrada=this.lista.slice();
    }

    filterData(event):void{
        
        this.filtrada=this.lista.filter(pokemon => {
            return pokemon.name.indexOf(this.texto)>=0;
        });
    }

    ngOnInit(): void {
        this.loadData();
    }
    onSelect(pokemon:PokemonInfo):void{
        this.selected=pokemon;
    }

    
}

/*ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
        let id = +params['id'];
        this.poke=this.pokemonInfoService.getPokemon(id);
        });
  } */