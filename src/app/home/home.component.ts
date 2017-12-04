import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private router: Router,
    private route: ActivatedRoute,
    private enrollmentService: EnrollmentService,
    private configService: ConfigService) { }

  ngOnInit() {
    const id = this.route.params['id'];
    console.log(this.route);
    this.getConfiguration();
  }

  getConfiguration() {
    this.configService.getConfiguration().subscribe(
      (data) => {
          this.enrollmentService.displayData = data;
          this.displayData = data;
      });
  }

  getStarted() {
    this.router.navigate(['/', 'msgs']);
  }

}
