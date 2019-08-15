import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

// this desribes the class that follows it
// this is a decorator
// decorator thing
@NgModule({
  imports:      [ BrowserModule, FormsModule ], // What do I need?
  declarations: [ AppComponent ], // what things are in my app?
  bootstrap:    [ AppComponent ] // Where do I start?
})

export class AppModule { }
