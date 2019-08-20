import { Component, Input } from '@angular/core';
import { Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'address-comp',
    templateUrl: 'address.component.html',
    styleUrls: ['address.component.css']
})

export class AddressComponent {
    regions = ['East', 'North', 'West', 'South'];
    states = ['California', 'Quebec', 'Jalisco', 'Illinois'];

    hide_address = false;

    @Input() address: Address;
}