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
  clientId = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private enrollmentService: EnrollmentService,
    private configService: ConfigService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.clientId = id;
    this.getConfiguration();
  }

  getConfiguration() {
    this.configService.getConfiguration(this.clientId).subscribe(
      (data) => {
          this.enrollmentService.displayData = data;
          this.displayData = data;
      });
  }

  getStarted() {
    console.log(this.displayData['home.nextButton.action']);
    this.router.navigate(['/', this.displayData['home.nextButton.action'] == null ? 'msgs' : this.displayData['home.nextButton.action']]);
  }

}
