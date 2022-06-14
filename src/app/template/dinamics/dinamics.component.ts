import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [
  ]
})
export class DinamicsComponent implements OnInit {

  constructor() { }

  personOne: IPerson = {
    name: 'Andres',
    favourite:[ {id:1,name: 'Assasins Creed'},
                {id:2,name: 'Fifa 22'}]
  }

  newGame: string = '';

  ngOnInit(): void {
  }

  save(){
    console.log('Form Save')
  }

  delete( index:number ){
    this.personOne.favourite.splice(index,1);
  }

  addFavourite (){

    const newFavourite:IFavourite = {
      id: this.personOne.favourite.length + 1,
      name: this.newGame
    }

    this.personOne.favourite.push({...newFavourite});
    this.newGame = '';
  }

}

export interface IPerson  {
  name: string,
  favourite: IFavourite[]
}

export interface IFavourite {
  id: number,
  name:string
}
