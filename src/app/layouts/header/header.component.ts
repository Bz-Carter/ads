import { Component, OnInit } from '@angular/core';
declare let jQuery, SportsZone, $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var handleSideBarMenu = function(){
      $('.openbtn').on('click',function(e){
        e.preventDefault();
        if($('#mySidenav').length > 0)
        {
          document.getElementById("mySidenav").style.left = "0";
        }
  
        if($('#mySidenav1').length > 0)
        {
          document.getElementById("mySidenav1").style.right = "0";
        }
        
      })
      
      $('.closebtn').on('click',function(e){
        e.preventDefault();
        if($('#mySidenav').length > 0)
        {
          document.getElementById("mySidenav").style.left = "-300px";
        }
        
        if($('#mySidenav1').length > 0)
        {
          document.getElementById("mySidenav1").style.right = "-820px";
        }
      })
    }
  
    var homeSearch = function() {
      'use strict';
      /* top search in header on click function */
      var quikSearch = jQuery("#quik-search-btn");
      var quikSearchRemove = jQuery("#quik-search-remove");
      
      quikSearch.on('click',function() {
        jQuery('.dez-quik-search').animate({'width': '100%' });
        jQuery('.dez-quik-search').delay(500).css({'left': '0'  });
      });
      
      quikSearchRemove.on('click',function() {
        jQuery('.dez-quik-search').animate({'width': '0%' ,  'right': '0'  });
        jQuery('.dez-quik-search').css({'left': 'auto'  });
      });	
      /* top search in header on click function End*/
    }

    /* Header Fixed ============ */
	var headerFix = function(){
		'use strict';
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).bind('scroll', function () {
			if(jQuery('.sticky-header').length)
			{
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
				} else {
					menu.removeClass('is-fixed');
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}

    /* Document.ready Start */	
jQuery(document).ready(function() {
  
	SportsZone.init();

  headerFix();

  homeSearch();

  handleSideBarMenu()
	
	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});
	
	$('a[data-toggle="tab"]').click(function(){
		// todo remove snippet on bootstrap v4
		$('a[data-toggle="tab"]').click(function() {
		  $($(this).attr('routerLink')).show().addClass('show active').siblings().hide();
		})
	});
	
});
/* Document.ready END */
  }

}
