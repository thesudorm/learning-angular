// NOTES

// [] brackets in the template indicate a property binding
// () brackets in the template indicate an event binding

// {{ }} for interpolation. One way.

// '#' makes a template variable
// $event is the DOM event that you can listen to

import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
    moduleId: module.id,
    selector: 'customer-list', // to use me in html: <customer-list>
    templateUrl: 'customer-list.component.html', // templates are fragments, not whole html doc
    styleUrls: ['customer-list.component.css']
})

// export lets other parts of the code to use it
export class CustomerListComponent  { 

    regions = ['East', 'North', 'West', 'South'];
    states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
    hide_address = false;

    customer: Customer; 

    customers: Customer[] = [
        {
          id: 1,
          name: 'Alex Smith',
          address: {
            street: '123 Main Street',
            city: 'Anytown',
            state: 'California',
            region: 'West'
          }
        },
        {
          id: 2,
          name: 'Pierre Pasmal',
          address: {
            street: '456 Rue de Main',
            city: 'Quebec City',
            state: 'Quebec',
            region: 'East'
          }
        },
        {
          id: 3,
          name: 'Margarita Nadie',
          address: {
            street: '789 Calle Principal',
            city: 'Guadalajara',
            state: 'Jalisco',
            region: 'South'
          }
        },
        {
          id: 4,
          name: 'Katie O\'Leary',
          address: {
            street: '137 DeKoven Street',
            city: 'Chicago',
            state: 'Illinois',
            region: 'Midwest'
          }
        },
    ];

}
