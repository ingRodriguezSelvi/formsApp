import { Component, OnInit } from '@angular/core';

interface ItemMenu{
  text:  string,
  route: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent{

  templateMenu: ItemMenu [] = [
    {
      text:  'Basics',
      route: './template/basics'
    },
    {
      text:  'Dinamics',
      route: './template/dinamics'
    },
    {
      text:  'Switchs',
      route: './template/switchs'
    }
  ]

  reactiveMenu: ItemMenu [] = [
    {
      text:  'Basics',
      route: './reactive/basics'
    },
    {
      text:  'Dinamics',
      route: './reactive/dinamics'
    },
    {
      text:  'Switchs',
      route: './reactive/switchs'
    }
  ]
}

