import { Component } from '@angular/core';

// Component Decorator
//  - Selector: Defines HTML element that can be inbedded
//  - templateUrl: Html component for module
//  - styleUrls: Styling component for module
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortfolioProject';
}
