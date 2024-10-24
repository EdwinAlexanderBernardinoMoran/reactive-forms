import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {

  // Manera 1
  // public myform: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], []),
  // })

  // Form builder manera 2


  public myForm: FormGroup = this.fb.group({
    name: [''],
    price: [0],
    inStorage: [0],
  });

  constructor(private fb: FormBuilder){}

  onSave():void {
    console.log(this.myForm.value);

  }
}
