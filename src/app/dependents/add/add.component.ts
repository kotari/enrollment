import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EnrollmentService } from '../../enrollment.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  changesSaved = false;
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
    console.log("rajesh " + this.enrollmentSvc.dependents.length);
    this.enrollmentSvc.dependents.push({firstName: this.firstName, lastName: this.lastName, middleName: this.middleName, suffix: this.suffix, ssn: this.ssn});
    console.log(this.enrollmentSvc.dependents.length);
    this.router.navigate(['/dependents']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.firstName !== '' && !this.changesSaved) {
      return confirm("Do you want to navigate without saving changes");
    } else {
      //this.enrollmentSvc.dependents.push()      
      return true;
    }
  }
}
