// NOTES

// [] brackets in the template indicate a property binding
// () brackets in the template indicate an event binding

// {{ }} for interpolation. One way.

// '#' makes a template variable
// $event is the DOM event that you can listen to

import { Component, OnInit } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';


@Component({
    moduleId: module.id,
    selector: 'customer-list', // to use me in html: <customer-list>
    templateUrl: 'customer-list.component.html', // templates are fragments, not whole html doc
    styleUrls: ['customer-list.component.css']
})

// export lets other parts of the code to use it
export class CustomerListComponent implements OnInit  { 
    customers: Customer[];
    customer: Customer; 

    regions = ['East', 'North', 'West', 'South'];
    states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
    hide_address = false;

    constructor(private dataService: DataService, private loggerService: LoggerService){ }

    //lifecycle goes here
    ngOnInit(){
        this.loggerService.log("Getting customer data");
        this.customers = this.dataService.getCustomers();
    }

    shift(increment: number) {
        let new_index = this.customers.findIndex(c => c === this.customer) + increment;

        new_index = Math.min(this.customers.length -1, Math.max(0, new_index));
        this.customer = this.customers[new_index];
    }


}
