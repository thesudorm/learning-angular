import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { CustomerListComponent }  from './customer-list.component';
import { CustomerDetailComponent }  from './customer-detail.component';
import { AddressComponent }  from './address.component';
import { DataService }  from './data.service';
import { LoggerService } from './logger.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// this desribes the class that follows it
// this is a decorator
// decorator thing
@NgModule({
  imports:      [ BrowserModule, FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ], // What do I need?
  declarations: [ 
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
  ], // what things are in my app?
  providers: [
    DataService,
    LoggerService
  ],
  bootstrap:    [ AppComponent ] // Where do I start?
})

export class AppModule { }
