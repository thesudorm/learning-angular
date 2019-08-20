// NOTES

// [] brackets in the template indicate a property binding
// () brackets in the template indicate an event binding

// {{ }} for interpolation. One way.

// '#' makes a template variable
// $event is the DOM event that you can listen to

import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Customer } from './model';

@Component({
    moduleId: module.id,
    selector: 'customer-detail', // to use me in html: <customer-detail>
    templateUrl: 'customer-detail.component.html', // templates are fragments, not whole html doc
    styleUrls: ['customer-detail.component.css']
})

// export lets other parts of the code to use it
export class CustomerDetailComponent  { 
    @Input() customer: Customer; 
    @Output() shift = new EventEmitter<number>();

    right() {
        this.shift.emit(1);
    }

    left() {
        this.shift.emit(-1);
    }

    hide_address = false;
}
