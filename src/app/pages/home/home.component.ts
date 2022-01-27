import { Component, OnInit } from '@angular/core';
declare let jQuery, dz_rev_slider_2: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jQuery(document).ready(function () {
      'use strict';
      dz_rev_slider_2();
    });
  }

}
