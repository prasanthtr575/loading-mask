import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  hidden: boolean = true;

  fetchData() {
    this.hidden = false;

    setTimeout(() => {
      alert('Fetching Data...');
      this.hidden = true;
    }, 3000);
  }
}
