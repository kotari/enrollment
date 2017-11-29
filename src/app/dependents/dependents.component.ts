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
    // this.canNavigate();
    // console.log(this.dependents.length);
  }

  addDependent() {
    this.router.navigate(['/add']);
  }

  toggleDependents(index: number) {
    if (+index !== 0) {
      const dependent = this.enrollmentSvc.dependents[+index];
      dependent.covered = !dependent.covered;
    }
    // this.canNavigate();
  }

  onSubmit(form: NgForm) {
    const obj = form.value;
    console.log(obj);
    this.changesSaved = true;
    this.router.navigate(['/tobacco']);
  }

  // canNavigate() {
  //   this.allowNavigation = false;
  //   for (let i = 0; i < this.dependents.length; i++) {
  //     if (this.dependents[i].covered) {
  //       this.allowNavigation = true;
  //       break;
  //     }
  //   }
  // }

}
