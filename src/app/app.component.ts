import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'klm-airline';
  
  constructor(private router:Router){
    this.router.events
    .pipe(
      // You can also use traditional if else in the subscribe 
      filter((event: any) => event instanceof NavigationStart)
    )
    .subscribe(event => {
      console.group(`Router event: ${event.constructor.name}`);
      console.log(event);
      console.groupEnd();
    });
  }
}
