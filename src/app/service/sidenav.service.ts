import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sideNavToggled = new Subject();
  constructor() { }

  toggleSidenav() {
    this.sideNavToggled.next();
  }

  get sideNavToggled$() {
    return this.sideNavToggled.asObservable();
  }
}
