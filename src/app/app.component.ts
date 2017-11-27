import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollmentService]
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
   
  }
}
