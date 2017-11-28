import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-dependents',
  templateUrl: './dependents.component.html',
  styleUrls: ['./dependents.component.css']
})
export class DependentsComponent implements OnInit {
  changesSaved = false;
  dependents = [];

  constructor(private router: Router, private enrollmentSvc: EnrollmentService) { }

  ngOnInit() {
    this.dependents = this.enrollmentSvc.dependents;
    // console.log(this.dependents.length);
  }

  addDependent() {
    this.router.navigate(['/add']);
  }

  toggleDependents(index: number) {
    const dependent = this.enrollmentSvc.dependents[index];
    dependent.covered = !dependent.covered;
  }

  onSubmit(form: NgForm) {
    const obj = form.value;
    console.log(form);
    // tslint:disable-next-line:max-line-length
    // this.enrollmentSvc.dependents.push({firstName: obj.firstName, lastName: obj.lastName, middleName: obj.middleName, suffix: obj.suffix, ssn: obj.ssn});
    this.changesSaved = true;
    this.router.navigate(['/tobacco']);
  }

}
