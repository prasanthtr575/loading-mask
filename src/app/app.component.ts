import { Component } from '@angular/core';

import { CallDataService } from './services/call-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CallDataService]
})
export class AppComponent {
  title = 'app';
  hidden: boolean = true;

  constructor(private data: CallDataService){
    this.data.setMask(this.hidden);
  }

  fetchData() {
    this.data.fetchData();
  }

  mask() {

  }

  unmask() {
  }
}
