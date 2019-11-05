import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../shared/event.model';
import { AuthService } from '../auth/auth.service';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  user: User = null;
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  AportDummyData() {
    this.http.get<string>('https://zaplanujsewakacje.firebaseio.com/asdf.json').subscribe(result => {
      console.log(result);
    }, error => {
      console.log(error);
    });
  }

  getMyEvents() {
    return this.http.get<Event[]>('https://zaplanujsewakacje.firebaseio.com/users/' + this.user.id + '/events.json');
  }
}
