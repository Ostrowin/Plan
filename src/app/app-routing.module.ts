import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthComponent } from './auth/auth.component';
import { UserPanelComponent } from './user-panel/user-panel.component';


const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'authorization', component: AuthComponent },
  { path: 'user', component: UserPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
