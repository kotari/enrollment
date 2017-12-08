import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollmentService]
})
export class EnrollmentComponent implements OnInit {

  ngOnInit() {
  }
}
