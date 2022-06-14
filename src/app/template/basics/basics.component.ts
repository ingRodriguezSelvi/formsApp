import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm

   initForm = {
    product: 'RTX 4080',
    price: 10,
    quantity: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

   validateName():boolean{
    return  this.myForm?.controls['product']?.invalid &&
            this.myForm?.controls['product']?.touched;
  }

  validatePrice(): boolean {

    return this.myForm?.controls['price']?.touched && this.myForm?.controls['price']?.value < 0 ? true : false
  }

  save(  ){
    console.log(this.myForm)

    this.myForm.resetForm({
      product : 'Write a Product',
      price: 0,
      quantity: 0
    });
  }
}
