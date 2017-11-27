import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msgs',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.css']
})
export class MsgsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

}
