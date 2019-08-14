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
    <fieldset>
        <img [src]="image"/> <!-- Example of a data binding -->
    </fieldset>
    <label [style.color] = "color">Favorite Color: </label>{{color}}
    <button (click)="clicked()">Toggle Color</button>

    <select (change)="colorChange($event.target.value)">
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
    </select>

    <select #color (change)="colorChange(color.value)">
        <option>Red</option>
        <option>Blue</option>
        <option>Green</option>
    </select>
    <br>
    <br>
    <br>
    <br>
    <div [hidden] = hide_address>
        {{street}}
        <br>
        {{city}}
        {{region}}
    </div>
    <br>
    <button (click)="address_click()">Show/Hide Address</button>
    <br>
    <select #region_selector (change)="region_change(region_selector.value)">
        <option>East</option>
        <option>North</option>
        <option>South</option>
        <option>West</option>
    </select>
    <br>
    <p>{{name}} is in the {{region}} region.</p>



  `, // templates are fragments, not whole html doc
})

// export lets other parts of the code to use it
export class AppComponent  { 
    name = 'Alex Smith'; 
    image = 'favicon.ico';
    color = 'red';

    street = "street";
    city = "city";
    region = "region";

    hide_address = false;

    clicked() {
        this.color = this.color === 'red' ? 'blue' : 'red';
    }

    colorChange(color: string) {
        this.color = color;
    }

    region_change(region: string) {
        this.region = region;
    }

    address_click() {
        this.hide_address = this.hide_address === true ? false : true;
    }
}
