import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // to use me in html: <my-app>
  template: `<h1>Hello {{name}}</h1>`, // templates are fragments, not whole html doc
})

// export lets other parts of the code to use it
export class AppComponent  { 
    name = 'Angular'; 
}
