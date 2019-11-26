import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private user = new BehaviorSubject<string>('john')
  getUser = this.user.asObservable()
  constructor() { }
  setUser(newUser){
    this.user.next(newUser)
  }
}
