import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `.online{
      color: white;
    }`
  ]
})

export class ServerComponent {
  serverId = 'somth';
  sertverStatus = 'offline';

  constructor() {
    this.sertverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.sertverStatus === 'online' ? 'green' : 'red';
  }
}
