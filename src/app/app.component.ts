import { Component } from '@angular/core';
import { CustomerListComponent } from './customer-list.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1> 
        <customer-list></customer-list>
        `
})

export class AppComponent {
    title = 'Customer Management';
}