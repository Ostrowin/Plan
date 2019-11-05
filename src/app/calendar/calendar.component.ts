import { Component, OnInit, Inject } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarService } from './calendar.service';
import { AddEventModalComponent } from './add-event-modal/add-event-modal.component';
import { OnEventClickModalComponent } from './on-event-click-modal/on-event-click-modal.component';
import { AuthService } from '../auth/auth.service';
import { Event } from '../shared/event.model';

export interface DialogData {
  date: Date;
  dateStr: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin, bootstrapPlugin];
  kupaData: string;
  user = null;
  events = [];

  constructor(
    private dialog: MatDialog,
    private calendarService: CalendarService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.user = user;
    });
    if (this.user) {
      this.calendarService.getMyEvents().subscribe(result => {
        const tmpArray = [];
        for (const event of result) {
          tmpArray.push(event);
        }
        this.AddEvent(tmpArray);
      });
    }
  }


  onDateClick(event) {
    const dialogRef = this.dialog.open(OnEventClickModalComponent, {
      // width: '500px',
      // height: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  AddEvent(eventArray) {
    this.events = this.events.concat(eventArray);
    /*     const dialogRef = this.dialog.open(AddEventModalComponent, {
          // width: '500px',
          // height: '250px',
          data: {  }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        }); */
  }

}


