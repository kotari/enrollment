import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../../enrollment.service';

@Component({
  selector: 'app-msgs',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.css']
})
export class MsgsComponent implements OnInit {

  constructor(private router: Router, private enrollmentService: EnrollmentService) { }
  displayData = {};

  ngOnInit() {
    this.displayData = this.enrollmentService.displayData;
  }

}
