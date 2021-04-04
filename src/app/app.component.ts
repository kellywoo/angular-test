import { Component, NgZone, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  i = 0;
  constructor(private zone: NgZone){
    setInterval(()=>this.i++, 2000);
  }
}
