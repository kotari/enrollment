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
  tobaccoUsage = [];
  tobaccoUsageOptions = [
    {name: 'No', value: 'No'},
    {name: 'Yes', value: 'Yes'}
  ];

  constructor(private router: Router, private enrollmentSvc: EnrollmentService) { }

  ngOnInit() {
    this.dependents = this.enrollmentSvc.dependents;
    for (let i = 0; i < this.dependents.length; i++) {
      this.tobaccoUsage.push(this.dependents[i].tobaccoUsage);
    }
    console.log(this.tobaccoUsage);
  }

  canDeactivate(form: NgForm): Observable<boolean> | Promise<boolean> | boolean {
    console.log('in canDeactivate tobacco');
    console.log(form);
    if (form.dirty && !this.changesSaved) {
      return confirm('Do you want to navigate without saving changes');
    } else {
      // this.enrollmentSvc.dependents.push()
      return true;
    }
  }

  tobaccoUsageChanged(index: number, obj: Object) {
    console.log('tobacco usage changed ' + index );
    console.log(obj);
    // this.enrollmentSvc.dependents[index].tobaccoUsage = 
  }

  onSubmit(form: NgForm) {
    const obj = form.value;
    // console.log(obj);
    console.log(this.tobaccoUsage);
    for (let i = 0; i < this.dependents.length; i++) {
      this.dependents[i].tobaccoUsage = this.tobaccoUsage[i];
    }
    // tslint:disable-next-line:max-line-length
    // this.enrollmentSvc.dependents.push({firstName: obj.firstName, lastName: obj.lastName, middleName: obj.middleName, suffix: obj.suffix, ssn: obj.ssn});
    this.changesSaved = true;
    this.router.navigate(['/dependents']);
  }

}
