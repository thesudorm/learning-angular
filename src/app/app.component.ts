// NOTES

// [] brackets in the template indicate a property binding
// () brackets in the template indicate an event binding

// {{ }} for interpolation. One way.

// '#' makes a template variable
// $event is the DOM event that you can listen to

import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me in html: <my-app>
  template: `
    <h1>{{name}}</h1>
    <p><i>{{name}} is in the {{region}} region.</i></p>
    <br>
    <fieldset>
        <input [value]="name"><br>
        <input [value]="name" (input)="name=$event.target.value"><br>
        <input [value]="name" (keyup)="name=$event.target.value"><br>
        <input [value]="name" (keyup.enter)="name=$event.target.value"
                              (blur)="name=$event.target.value"><br>

        <input [(ngModel)]="name"><br>
        <input [ngModel]="name" (ngModelChange)="name=$event"><br>
    </fieldset>
    <div>
        <label><input type="checkbox" [(ngModel)]="hide_address"> Hide Address</label>
        <br>
        <br>
        <div [hidden] = hide_address>
            {{street}}
            <br>
            {{city}}
            {{region}}
            <br>

            <select #region_selector (change)="region_change(region_selector.value)">
                <option>East</option>
                <option>North</option>
                <option>South</option>
                <option>West</option>
        </select>
        </div>
        <br>
        <br>
    </div>
  `, // templates are fragments, not whole html doc
})

// export lets other parts of the code to use it
export class AppComponent  { 
    name = 'Alex Smith'; 

    street = "432 Anywhere Street";
    city = "Jumbo";
    region = "North";

    hide_address = false;

    region_change(region: string) {
        this.region = region;
    }

    address_click() {
        this.hide_address = this.hide_address === true ? false : true;
        //this.hide_address = !this.hide_address; // This is how they did it
    }
}
