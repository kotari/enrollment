import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.css']
})
export class DependentsComponent implements OnInit {
  dependents = [];

  constructor(private router: Router, private enrollmentSvc: EnrollmentService) { }

  ngOnInit() {
    this.dependents = this.enrollmentSvc.dependents;
    // console.log(this.dependents.length);
  }

  addDependent() {
    this.router.navigate(['/add']);
  }

}
