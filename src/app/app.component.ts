import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let $, lightGallery, jQuery, SportsZone: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    Location, {
        provide: LocationStrategy,
        useClass: PathLocationStrategy
    }
]
})
export class AppComponent {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
  }

  ngOnInit(){
    this.recallJsFuntions();
    SportsZone.handleMasonryFilter();
}

  recallJsFuntions() {
    this.router.events
    .subscribe((event) => {
        if ( event instanceof NavigationStart ) {
          jQuery(document).ready(function() {
  
            SportsZone.init();
            
            jQuery('.navicon').on('click',function(){
              $(this).toggleClass('open');
              
            });
            
          });
        }
    });
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    .subscribe(event => {
        $.getScript('assets/js/custom.js');
        $.getScript('assets/js/rev.slider.js');
        $.getScript('assets/plugins/imagesloaded/imagesloaded.js');
        $.getScript('assets/plugins/lightgallery/js/lightgallery-all.js');

        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}
}
