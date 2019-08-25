import { Component, Input, OnInit } from '@angular/core';
import { Address } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
    moduleId: module.id,
    selector: 'address-comp',
    templateUrl: 'address.component.html',
    styleUrls: ['address.component.css']
})

export class AddressComponent {
    regions = ['East', 'North', 'West', 'South'];
    //states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
    states: string[];

    hide_address = false;

    constructor(private dataService: DataService,
                private loggerService: LoggerService) { };

    ngOnInit() {
        this.getStates();
    }

    getStates() {
        this.loggerService.log("Getting states..");
        this.dataService.getStates().subscribe(states => {
            this.states = states;
        }, (errorMsg: string) => {
            alert(errorMsg);
        })
    }

    @Input() address: Address;
}