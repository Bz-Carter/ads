import { Component, OnInit } from '@angular/core';
import { Category } from "src/app/interfaces/category";
import { Article } from 'src/app/interfaces/article';
import { Photo } from 'src/app/interfaces/photo';
import { Media } from "src/app/interfaces/media";
import { Response } from 'src/app/interfaces/response';
import { ArticleService } from 'src/app/services/article.service';
import { PhotoService } from 'src/app/services/photo.service';
import { MediaService } from "src/app/services/media.service";
import { CategoryService } from "src/app/services/category.service";
declare let $, jQuery, revslider_showDoubleJqueryError: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  articles: Article[] = [];
  categories: Category[] = [];
  photos: Photo[] = [];
  medias: Media[] = [];
  lastPage: number;

  constructor(
    private articleService: ArticleService,
    private photoService: PhotoService,
    private mediaService: MediaService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    var dzrevapi;
    var dzQuery = jQuery;

    function dz_rev_slider_2() {
      'use strict';
      if (dzQuery('#slider_02').revolution == undefined) {
        revslider_showDoubleJqueryError('#slider_02');
      } else {
        dzrevapi = dzQuery('#slider_02')
          .show()
          .revolution({
            sliderType: 'standard',
            jsFileLocation:
              '//server.local/revslider/wp-content/plugins/revslider/public/assets/js/',
            sliderLayout: 'fullwidth',
            dottedOverlay: 'none',
            delay: 9000,
            navigation: {
              keyboardNavigation: 'on',
              keyboard_direction: 'vertical',
              mouseScrollNavigation: 'off',
              onHoverStop: 'off',
              touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: false,
              },
              arrows: {
                style: 'erinyen',
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
                left: {
                  h_align: 'left',
                  v_align: 'center',
                  h_offset: 20,
                  v_offset: 0,
                },
                right: {
                  h_align: 'right',
                  v_align: 'center',
                  h_offset: 20,
                  v_offset: 0,
                },
              },
            },

            responsiveLevels: [1240, 1024, 778, 480],
            visibilityLevels: [1240, 1024, 778, 480],
            gridwidth: [1240, 1024, 778, 480],
            gridheight: [650, 600, 600, 600],
            lazyType: 'none',
            parallax: {
              type: 'scroll',
              origo: 'enterpoint',
              speed: 400,
              levels: [
                5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 46, 47, 48, 49, 50, 55,
              ],
            },
            shadow: 0,
            spinner: 'off',
            stopLoop: 'off',
            stopAfterLoops: -1,
            stopAtSlide: -1,
            shuffle: 'off',
            autoHeight: 'off',
            hideThumbsOnMobile: 'off',
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
              simplifyAll: 'off',
              nextSlideOnWindowFocus: 'off',
              disableFocusListener: false,
            },
          });
      }
    }

    jQuery(document).ready(function () {
      'use strict';
      dz_rev_slider_2();
    });

    this.refresh();
  }

  refresh(currentPage: number = 1) {
    this.articleService.all(currentPage).subscribe((res: Response) => {
      this.articles = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.categoryService.all(currentPage).subscribe((res: Response) => {
      this.categories = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.photoService.all(currentPage).subscribe((res: Response) => {
      this.photos = res.data;
      this.lastPage = res.meta.last_page;
    });
    this.mediaService.all(currentPage).subscribe((res: Response) => {
      this.medias = res.data;
      this.lastPage = res.meta.last_page;
    });
  }
}
