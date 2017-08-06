import {
  Component, EventEmitter, forwardRef, Input, OnInit, Output, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Unicorn} from "../Models/unicorn";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  unicorns: Unicorn[] = [];
  myForm: FormGroup;

  colorsF = [
    {value: '#FFA500', viewValue: 'Orange'},
    {value: '#FFC0CB', viewValue: 'Pink'},
    {value: '#0000FF', viewValue: 'Blue'},
    {value: '#FFFFFF', viewValue: 'White'}
  ];

  colorsM = [
    {value: '#000000', viewValue: 'Black'},
    {value: '#808080', viewValue: 'Grey'},
    {value: '#FF0000', viewValue: 'Red'},
    {value: '#FFFF00', viewValue: 'Yellow'}
  ];

  colors = [
    {value: 'Rainbow', viewValue: 'Rainbow'},
  ];

  constructor(public dialogRef: MdDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
    });
  }

  save(): void {
    let unicorns = JSON.parse(localStorage.getItem('unicorns'));
    let unicorn = new Unicorn((this.ObjectLength(unicorns) + 1), this.myForm.value.name, this.addSource(this.myForm.value.color),
      this.myForm.value.color, this.myForm.value.gender, Date.now(), null);

    if (unicorns == null) {
      unicorns = [];
    }
    unicorns.push(unicorn);
    localStorage.setItem('unicorns', JSON.stringify(unicorns));
    this.myForm.reset();
    this.dialogRef.close(unicorns);
  }

  addSource(result): string {
    switch(result) {
      case '#FFA500':
        return '../../assets/Unicorn/OrangeF.png';
      case '#FFC0CB':
        return '../../assets/Unicorn/PinkF.png';
      case '#0000FF':
        return '../../assets/Unicorn/BlueF.png';
      case '#FFFFFF':
        return '../../assets/Unicorn/WhiteF.png';
      case '#000000':
        return '../../assets/Unicorn/BlackM.png';
      case '#808080':
        return '../../assets/Unicorn/GreyM.png';
      case '#FF0000':
        return '../../assets/Unicorn/RedM.png';
      case '#FFFF00':
        return '../../assets/Unicorn/YellowM.jpg'
      default:
        return '../../assets/Unicorn/Rainbow.png';
    }
  }

  ObjectLength(object): number {
    let length = 0;
    for( let key in object ) {
      if( object.hasOwnProperty(key) ) {
        ++length;
      }
    }
    return length;
  };
}
