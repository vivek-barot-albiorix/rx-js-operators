import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  print(text: string, id: string) {
    let el = document.createElement('li');
    el.innerText = text;
    document.getElementById(id)?.appendChild(el);
  }
}
