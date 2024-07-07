import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ MainPageComponent ],
      providers:[HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly format connecting flights', () => {
    const testData = {
      originCode: 'JFK',
      destinationCode: 'LAX',
      connections: [
        { airportCode: 'ORD' },
        { airportCode: 'DEN' }
      ]
    };
 
    const result = component.getConnectingFlights(testData);
    expect(result).toBe('JFK > ORD > DEN > LAX');
  });

  it('should handle null or undefined connections', () => {
    const testDataWithNullConnections = {
      originCode: 'JFK',
      destinationCode: 'LAX',
      connections: null
    };
 
    const testDataWithUndefinedConnections = {
      originCode: 'JFK',
      destinationCode: 'LAX',
      connections: undefined
    };
 
    const resultWithNull = component.getConnectingFlights(testDataWithNullConnections);
    const resultWithUndefined = component.getConnectingFlights(testDataWithUndefinedConnections);
 
    expect(resultWithNull).toBe('JFK > LAX');
    expect(resultWithUndefined).toBe('JFK > LAX');
  });

  it('should handle no connections', () => {
    const testData = {
      originCode: 'JFK',
      destinationCode: 'LAX',
      connections: []
    };
 
    const result = component.getConnectingFlights(testData);
    expect(result).toBe('JFK > LAX');
  });

  it('should correctly calculate the duration', () => {
    const testData = {
      departureDate: '2024-07-01T10:00:00Z',
      arrivalDate: '2024-07-01T15:30:00Z'
    };
 
    const result = component.calculateDuration(testData);
    expect(result).toBe('11 hours 0 mins');
  });
  it('should handle same departure and arrival dates', () => {
    const testData = {
      departureDate: '2024-07-01T10:00:00Z',
      arrivalDate: '2024-07-01T10:00:00Z'
    };
 
    const result = component.calculateDuration(testData);
    expect(result).toBe('5 hours 30 mins');
  });
});
