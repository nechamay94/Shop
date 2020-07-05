import React, {Component} from "react"
import {Link} from "react-router-dom"
import logo from "../logo.svg"
import styled from "styled-components"
import {ButtonContainer} from './Button'
import $ from 'jquery'


class NavBar extends Component {
  componentDidMount(){
    $(function() {
      'use strict';
      
      function toggle(e) {
        if (e) e.preventDefault();
        
        var $this = $(this),
            $navbar = $this.parents('.navbar'),
            $item = $this.parent();
        
        $('.nav-item.active', $navbar).removeClass('active');
        $item.addClass('active');
        
        if ($navbar.hasClass('main-nav')) {
          $('.active', $navbar.siblings('.sub-nav')).removeClass('active');
          $($item.data('target')).addClass('active');
        }
      }
      
      function leave(e) {
        var $this = $(this),
            $navbar = $this.siblings('.main-nav'),
            $subnav = $('.navbar-nav.active', $this);
        
        $('[data-target="#' + $subnav.attr('id') + '"]', $navbar).removeClass('hover');
        $subnav.removeClass('active');
      };
      
      function enter(e) {
        var $this = $(this),
            $navbar = $this.parents('.navbar');
        
        $('.nav-item.hover', $navbar).removeClass('hover');
        $this.addClass('hover');
        
        if ($navbar.hasClass('main-nav')) {
          $('.active', $navbar.siblings('.sub-nav')).removeClass('active');
          $($this.data('target')).addClass('active');
        }
      }
      
      $('.main-nav .nav-link, .sub-nav .nav-link').click(toggle);
      $('.main-nav .nav-item').mouseenter(enter);
      $('.sub-nav').mouseleave(leave);
    });
  }
  render() {
    return (
<NavBarWrapper>
<nav class="navbar navbar-expand-sm navbar-light main-nav">
  <div class="container">
    <ul class="nav navbar-nav">
      <li class="nav-item active"><a class="nav-link" href="#/">מעגל השנה<span class="sr-only">(current)</span></a></li>
      <li class="nav-item" data-target="#categories"><a class="nav-link" href="#/categories">מסורת ישראל</a></li>
      <li class="nav-item" data-target="#auctions"><a class="nav-link" href="#/auctions">קיץ</a></li>
      <li class="nav-item"><a class="nav-link" href="#/alerts">קייטנה</a></li>
      <li class="nav-item"><a class="nav-link" href="#/prices">יצירה</a></li>
      <li class="nav-item"><a class="nav-link" href="#/help">כלי כתיבה</a></li>
      <li class="nav-item"><a class="nav-link" href="#/help">תנועה ומשחק</a></li>
      <li class="nav-item"><a class="nav-link" href="#/help">מתנות ועיצוב</a></li>

    </ul>
  </div>
</nav>
<nav class="navbar navbar-light sub-nav">
  <div class="container">
    <ul class="nav navbar-nav" id="categories">
      <li class="nav-item"><a class="nav-link" href="#/asian-art">ראש השנה ויום כיפור</a></li>
      <li class="nav-item"><a class="nav-link" href="#/clocks-watches-and-jewellery">שבועות</a></li>
      <li class="nav-item"><a class="nav-link" href="#/collectibles">ל"ג בעומר וימי הספירה</a></li>
      <li class="nav-item"><a class="nav-link" href="#/decorative-art">ט"ו בשבט</a></li>
      <li class="nav-item"><a class="nav-link" href="#/ethnographica-tribal-art">שבת</a></li>
      <li class="nav-item"><a class="nav-link" href="#/fine-art">מסיבת סידור</a></li>
      <li class="nav-item"><a class="nav-link" href="#/fine-art-and-antiques">סוכות ושמחת תורה</a></li>
      <li class="nav-item"><a class="nav-link" href="#/furnature">חנוכה</a></li>
      <li class="nav-item"><a class="nav-link" href="#/vintage-fashion-and-textiles">פסח</a></li>
      <li class="nav-item"><a class="nav-link" href="#/vintage-fashion-and-textiles">פורים</a></li>
      <li class="nav-item"><a class="nav-link" href="#/vintage-fashion-and-textiles">תורה</a></li>
      <li class="nav-item"><a class="nav-link" href="#/vintage-fashion-and-textiles">בריאת העולם</a></li>

    </ul>
    <ul class="nav navbar-nav" id="auctions">
      <li class="nav-item"><a class="nav-link" href="#/current-auctions">current auctions</a></li>
      <li class="nav-item"><a class="nav-link" href="#/auctioneers">auctioneers</a></li>
      <li class="nav-item"><a class="nav-link" href="#/featured-lots">featured lots</a></li>
    </ul>
  </div>
</nav>      


</NavBarWrapper>
    );
  }}

  const NavBarWrapper = styled.div`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: {
      image: url('https://unsplash.it/800/600?image=998');
      repeat: no-repeat;
      size: cover;
    };
  }
  
  .navbar.main-nav, .navbar.sub-nav {
    position: relative;
    border-radius: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, .6);
    user-select: none;
    outline: 0;
  
    .nav-item {
      position: relative;
      padding: .25em 0;
  
      &, .nav-link {
        transition: color .5s ease;
      }
  
      &:hover .nav-link, &.hover .nav-link, &.active .nav-link {
        color: #0275d8;
      }
    }
  }
  
  .navbar.main-nav {
    border-bottom: .2em solid #0275d8;
    background-color: rgba(0, 0, 0, .6);
    z-index: 2;
  
    .nav-item {
      &, .nav-link {
        color: #ccc;
      }
  
      &.active:after {
        display: block;
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: .4em solid transparent;
        border-right: .4em solid transparent;
        border-bottom: .4em solid #0275d8;
        margin-left: -.4em;
      }
    }
  }
  
  .navbar.sub-nav {
    position: absolute;
    margin-top: -.1em;
    border-bottom: .1em solid #0275d8;
    background-color: rgba(255, 255, 255, .6);
    width: 100%;
    z-index: 1;
    
    .navbar-nav:not(.active) {
      display: none;
    }
  
    .nav-item, .nav-link {
      color: #333;
    }
  }
  `
  export default NavBar