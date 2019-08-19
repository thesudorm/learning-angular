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
    selector: 'customer-detail', // to use me in html: <customer-detail>
    templateUrl: 'customer-detail.component.html', // templates are fragments, not whole html doc
    styleUrls: ['customer-detail.component.css']
})

// export lets other parts of the code to use it
export class CustomerDetailComponent  { 
    regions = ['East', 'North', 'West', 'South'];
    states = ['California', 'Quebec', 'Jalisco', 'Illinois'];

    customer: Customer; 

    hide_address = false;
}
