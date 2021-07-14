import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
declare let jQuery, SportsZone, $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent implements OnInit {
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
  }

  ngOnInit(){    

      this.recallJsFuntions();
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
                
                $('a[data-toggle="tab"]').click(function(){
                    // todo remove snippet on bootstrap v4
                    $('a[data-toggle="tab"]').click(function() {
                      $($(this).attr('href')).show().addClass('show active').siblings().hide();
                    })
                });
                
            });

            jQuery(window).on("load", function (e) {
                SportsZone.load();
                 setTimeout(function(){
                    jQuery('#loading-area').remove();
                }, 0); 
            });
          }
      });
      this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
          $.getScript('assets/js/custom.js');
         // $('#preloader').fadeOut('slow');
          this.location = this.router.url;
          if (!(event instanceof NavigationEnd)) {
              return;
          }
          window.scrollTo(0, 0);
      });
  }
}


