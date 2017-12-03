import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollmentService } from '../enrollment.service';
import { ConfigService } from '../config.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayData = {};

  constructor(private router: Router, private enrollmentService: EnrollmentService, private configService: ConfigService) { }

  ngOnInit() {
    this.getConfiguration();
  }

  getConfiguration() {
    this.configService.getConfigurartion().subscribe(
      (data) => {
          this.enrollmentService.displayData = data;
          this.displayData = data;
      });
  }

  getStarted() {
    this.router.navigate(['/', 'msgs']);
  }

}
