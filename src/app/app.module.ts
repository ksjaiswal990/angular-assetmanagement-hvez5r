import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { User } from '../models/login.model';




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LoginComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
