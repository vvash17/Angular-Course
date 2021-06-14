import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [
    `.logStyle{
      background-color: wheat;
    }
    `
  ]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Something';
  serverCreated = true;
  servers = ['Testserver'];
  displayStatus = false;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  changeDisplayStatus() {
    this.displayStatus = !this.displayStatus;
    this.log.push(new Date().toDateString());
  }

  onCreateServer() {
    this.serverCreationStatus = 'New server was created! server name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }
}
