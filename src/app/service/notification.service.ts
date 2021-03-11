import { Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private userStatus =  new BehaviorSubject<string>('value changed');
  @Output() userData = this.userStatus.asObservable();

  constructor() { }

/**
 * Notify that user status has been changed
 * Just call this method after successful login and logout
 * subscribe this in header component where we are getting userdata from storage
 */
  public notifyForUserDataChange() {
    this.userStatus.next(status);
  }
}
