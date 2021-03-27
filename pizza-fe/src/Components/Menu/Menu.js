import React, { useEffect } from 'react';
import './Menu.scss';
import $ from 'jquery';
import { TweenMax, TimelineLite, Expo, TimelineMax } from 'gsap';
import { Link } from 'react-router-dom';
const Menu = () => {
  useEffect(() => {
    $(document).ready(function () {
      TweenMax.set('.project-preview', { width: 0 });
      var tl = new TimelineLite();
      $(document)
        .on('mouseover', '.navigation-item', function (evt) {
          tl = new TimelineLite();
          tl.to($('.project-preview'), 1, {
            width: '600px',
            ease: Expo.easeInOut,
          });
        })
        .on('mouseout', '.navigation-item', function (evt) {
          tl = new TimelineLite();
          tl.to($('.project-preview'), 0.5, {
            width: 0,
            ease: Expo.easeInOut,
          });
        });
    });
    $('.navigation-link-1').hover(function () {
      $('.project-preview').css({
        'background-image': 'url(./veg.png)',
      });
    });
    $('.navigation-link-2').hover(function () {
      $('.project-preview').css({
        'background-image': 'url(./non-veg.jpg)',
      });
    });

    $('.navigation-link-3').hover(function () {
      $('.project-preview').css({
        'background-image': 'url(./sides.jpg)',
      });
    });
    $(window).scroll(function () {
      var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
      let scrollPercent = (scroll / (dh - wh)) * 100;
      $('.progressbar').css('height', scrollPercent + '%');
    });
    const timeline = new TimelineMax();
    timeline.staggerFrom(
      '.nav-link',
      1,
      {
        opacity: 0,
        delay: 3,
        y: -70,
      },
      0.2,
    );
  });
  
  return (
    <section class="menu">
      <div class="menu-header">
        <h4>OUR MENU</h4>
      </div>
      <div class="navigation-wrapper">
        <div class="project-preview-wrapper">
          <div class="project-preview"></div>
        </div>
        <ul class="navigation-list">
        <li class="navigation-item">
        <Link to="/veg" class="navigation-link navigation-link-1">
              <span data-text="Veg">Vegetarian</span></Link>
          </li>
          <div class="project-overlay"></div>
         
         <li class="navigation-item">
            <a
              class="navigation-link navigation-link-2"
            >
              <span data-text="NonVeg">NonVegetarian</span>
            </a>
          </li> 
          <li class="navigation-item">
            <a
              class="navigation-link navigation-link-3"
              href="./item-list.html"
            >
              <span data-text="Sides">Sides</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="progressbar"></div>
    </section>
  );
};

export default Menu;
