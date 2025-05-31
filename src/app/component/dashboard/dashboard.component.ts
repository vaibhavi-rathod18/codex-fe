import { Overlay } from '@angular/cdk/overlay';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,  
})
export class DashboardComponent implements OnInit {

  // scrollStrategy: any;
  passengerCount = 1;
  constructor(private overlay: Overlay) { }
  
  ngOnInit(): void {
    // this.scrollStrategy = this.overlay.scrollStrategies.reposition();
  }

}
