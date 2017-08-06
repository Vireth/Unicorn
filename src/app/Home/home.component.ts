import { Component, OnInit } from '@angular/core';
import { Unicorn } from '../Models/unicorn';
import { MdDialog } from '@angular/material';
import { DialogComponent } from '../Dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  unicorns: Unicorn[] = [];
  selecting: boolean = false;
  tmp: number;

  constructor(public dialog: MdDialog) {}

  ngOnInit(): void {
    this.unicorns = JSON.parse(localStorage.getItem('unicorns'));
  }

  findMate(id) {
    this.selecting = !this.selecting;
    this.tmp = id;
  }

  selectMate(id) {
    this.selecting = !this.selecting;

    for (let i in this.unicorns) {
      if (this.unicorns[i].id === id) {
        this.unicorns[i].mate = this.tmp;
      }
      if (this.unicorns[i].id === this.tmp) {
        this.unicorns[i].mate = id;
      }
    }
    localStorage.setItem('unicorns', JSON.stringify(this.unicorns));
  }

  doBaby(id, idMate) {
    let name1;
    let name2;

    let color1;
    let color2;

    for (let i in this.unicorns) {
      if (this.unicorns[i].id === id) {
        name1 = this.unicorns[i].name;
        color1 = this.unicorns[i].color;
      }
      if (this.unicorns[i].id === idMate) {
        name2 = this.unicorns[i].name;
        color2 = this.unicorns[i].color;
      }
    }
    let unicorn = new Unicorn((this.ObjectLength(this.unicorns) + 1), name1+name2, this.addSource(Math.floor((Math.random() * (9 - 0 + 1)) + 0)),
      this.mixColor(color1, color2), this.selectGender(), Date.now(), null);

    this.unicorns.push(unicorn);
    localStorage.setItem('unicorns', JSON.stringify(this.unicorns));
  }

  addSource(result): string {
    switch(result) {
      case 1:
        return '../../assets/Unicorn/OrangeF.png';
      case 2:
        return '../../assets/Unicorn/PinkF.png';
      case 3:
        return '../../assets/Unicorn/BlueF.png';
      case 4:
        return '../../assets/Unicorn/WhiteF.png';
      case 5:
        return '../../assets/Unicorn/BlackM.png';
      case 6:
        return '../../assets/Unicorn/GreyM.png';
      case 7:
        return '../../assets/Unicorn/RedM.png';
      case 8:
        return '../../assets/Unicorn/YellowM.jpg'
      default:
        return '../../assets/Unicorn/Rainbow.png';
    }
  }

  checkMate(id, idMate) {
    let save1;
    let save2;

    for (let i in this.unicorns) {
      if (this.unicorns[i].id === id) {
        save1 = this.unicorns[i].gender;
      }
      if (this.unicorns[i].id === idMate) {
        save2 = this.unicorns[i].gender;
      }
    }
    if (save1 === save2) {
      return false;
    } else if (save1 != 'Other' && save2 != 'Other') {
      return true;
    } else {
      return false;
    }
  }

  mixColor(color1, color2): string {
    return '#NONO';
  }

  selectGender(): string {
    let nbr = Math.floor((Math.random() * (9 - 0 + 1)) + 0);
    if ((nbr % 2) == 0){
      return 'Male';
    }
    else {
      return 'Female';
    }
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.unicorns = result;
      }
    });
  }

  stopSelect() {
    this.selecting = !this.selecting;
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
