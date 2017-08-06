import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule}  from  '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdDialogModule, MdIconModule, MdInputModule, MdRadioModule,
  MdSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { DialogComponent } from './Dialog/dialog.component';
import { HomeComponent } from './Home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // Angular Animation & Material
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdDialogModule,
    MdCardModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
