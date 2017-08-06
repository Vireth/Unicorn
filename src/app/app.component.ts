import { Component, OnInit } from '@angular/core';
import { Unicorn } from './Models/unicorn';
import { MdDialog} from '@angular/material';
import { DialogComponent } from './Dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unicorn 3.0';
}
