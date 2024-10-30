import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const laptop = {
  name: 'Lenovo Ideapad',
  price: 800,
  inStorage: 6
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit{

  // Manera 1
  // public myform: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], []),
  // })

  // Form builder manera 2

  ngOnInit(): void {
      this.myForm.reset(laptop)
  }


  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder){}

  onSave():void {

    if (this.myForm.invalid) return;
    console.log(this.myForm.value);

    // si no le pasamos nada deja los valores a cero, en caso podemos pasarle un objeto con las propiedades
    this.myForm.reset({
      price: 0,
      inStorage: 0
    })

  }
}
