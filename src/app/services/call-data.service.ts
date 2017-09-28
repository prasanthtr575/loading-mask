import { Injectable } from '@angular/core';

@Injectable()
export class CallDataService {

  mask: boolean;

  constructor() { }

  fetchData() {
    this.toggleMask();

    setTimeout(() => {
      alert("Fetched Data");
      this.toggleMask();
    }, 3000)
  }

  setMask(mask) {
    this.mask = mask;
  }

  toggleMask() {
    this.mask = !this.mask;
  }
}
