import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dataServiceClick() {
    return console.log('clicked');
  }
}
