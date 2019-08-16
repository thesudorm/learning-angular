// NOTES

// [] brackets in the template indicate a property binding
// () brackets in the template indicate an event binding

// {{ }} for interpolation. One way.

// '#' makes a template variable
// $event is the DOM event that you can listen to

import { Component } from '@angular/core';

import { Customer } from './model.ts';

@Component({
    moduleId: module.id,
    selector: 'my-app', // to use me in html: <my-app>
    templateUrl: 'app.component.html', // templates are fragments, not whole html doc
    styleUrls: ['app.component.css']
})

// export lets other parts of the code to use it
export class AppComponent  { 

    customer: Customer = {
        name: 'Alex Smith',
        id: 1,
        address: {
            city: 'Anytown',
            street: '123 main street',
            state: 'Ohio',
            region: 'North'
        }
    };

    hide_address = false;
}
