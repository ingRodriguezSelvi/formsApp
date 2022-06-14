import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: [
  ]
})
export class SwitchsComponent{

  persona = {
    genero: '',
    notificaciones:false
  }

  terminosYCondiciones: boolean = false;
}


