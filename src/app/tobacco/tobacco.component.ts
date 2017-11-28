import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-tobacco',
  templateUrl: './tobacco.component.html',
  styleUrls: ['./tobacco.component.css']
})
export class TobaccoComponent implements OnInit {
  changesSaved = false;
  @ViewChild('f') form: NgForm;
  dependents = [];

  constructor(private router: Router, private enrollmentSvc: EnrollmentService) { }

  ngOnInit() {
    this.dependents = this.enrollmentSvc.dependents;
  }

}
