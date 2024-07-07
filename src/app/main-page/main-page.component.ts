import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight   } from "../flight";
import { BehaviorSubject, Observable, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
}) 
export class MainPageComponent implements OnInit {
  flightsData$!: Observable<Flight[]>;

  constructor(private http:HttpClient) { }
  // mydata$: Observable<any> | undefined;
  flightsData:Flight[] = [];
  url: string = '/assets/flight.json';
  ngOnInit(): void {
    this.http.get(this.url).subscribe((res:any) => {
      this.flightsData = res.data.flightOffers;
      // this.mydata$ = of(this.flightsData);
    });

    this.flightsData$ = this.http.get(this.url).pipe(map((res:any)=>res.data.flightOffers));
  }
 calculateDuration(item:any) {
  const diffinHr = new Date(item.arrivalDate).getTime() - new Date(item.departureDate).getTime();
  return new Date(diffinHr).getHours() + ' hours ' + new Date(diffinHr).getMinutes() + ' mins';
 }

getConnectingFlights(item:any){
  let connectingflight = '';
  if (item.connections) {
  item.connections.map((x:any)=>{
    connectingflight = connectingflight  + x.airportCode + ' > '
  });
}
 return `${item?.originCode} > ${connectingflight}${item?.destinationCode}`
 }
}
