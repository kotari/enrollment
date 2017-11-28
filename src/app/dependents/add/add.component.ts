import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EnrollmentService } from '../../enrollment.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  changesSaved = false;
  @ViewChild('f') form: NgForm;
  firstName = '';
  lastName = '';
  middleName = '';
  suffix = '';
  ssn = '';

  constructor(private router: Router, private enrollmentSvc: EnrollmentService) { }

  ngOnInit() {
    console.log(this.enrollmentSvc);
  }

  onAddDependent() {
    this.changesSaved = true;
    console.log(this.firstName);
    console.log(this.lastName);
    console.log('rajesh ' + this.enrollmentSvc.dependents.length);
    // tslint:disable-next-line:max-line-length
    this.enrollmentSvc.dependents.push({firstName: this.firstName, lastName: this.lastName, middleName: this.middleName, suffix: this.suffix, ssn: this.ssn, covered: true, tobaccoUsage: 'No'});
    console.log(this.enrollmentSvc.dependents.length);
    this.router.navigate(['/dependents']);
  }

  canDeactivate(form: NgForm): Observable<boolean> | Promise<boolean> | boolean {
    console.log('in canDeactivate');
    // console.log(form);
    if (form.dirty && !this.changesSaved) {
      return confirm('Do you want to navigate without saving changes');
    } else {
      // this.enrollmentSvc.dependents.push()
      return true;
    }
  }

  onSubmit(form: NgForm) {
    const obj = form.value;
    // tslint:disable-next-line:max-line-length
    this.enrollmentSvc.dependents.push({firstName: obj.firstName, lastName: obj.lastName, middleName: obj.middleName, suffix: obj.suffix, ssn: obj.ssn, covered: true, tobaccoUsage: 'No'});
    console.log(this.enrollmentSvc.dependents.length);
    this.changesSaved = true;
    this.router.navigate(['/dependents']);
  }
}
