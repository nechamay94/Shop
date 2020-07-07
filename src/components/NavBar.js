import React, {Component} from "react"
import {Link} from "react-router-dom"
import logo from "../logo.svg"
import styled from "styled-components"
import {ButtonContainer} from "./Button"
import $ from "jquery"

class NavBar extends Component {
  componentDidMount() {
    $(function () {
      "use strict"

      function toggle(e) {
        if (e) e.preventDefault()

        var $this = $(this),
          $navbar = $this.parents(".navbar"),
          $item = $this.parent()

        $(".nav-item.active", $navbar).removeClass("active")
        $item.addClass("active")

        if ($navbar.hasClass("main-nav")) {
          $(".active", $navbar.siblings(".sub-nav")).removeClass("active")
          $($item.data("target")).addClass("active")
        }
      }

      function leave(e) {
        var $this = $(this),
          $navbar = $this.siblings(".main-nav"),
          $subnav = $(".navbar-nav.active", $this)

        $('[data-target="#' + $subnav.attr("id") + '"]', $navbar).removeClass(
          "hover"
        )
        $subnav.removeClass("active")
      }

      function enter(e) {
        var $this = $(this),
          $navbar = $this.parents(".navbar")

        $(".nav-item.hover", $navbar).removeClass("hover")
        $this.addClass("hover")

        if ($navbar.hasClass("main-nav")) {
          $(".active", $navbar.siblings(".sub-nav")).removeClass("active")
          $($this.data("target")).addClass("active")
        }
      }

      $(".main-nav .nav-link, .sub-nav .nav-link").click(toggle)
      $(".main-nav .nav-item").mouseenter(enter)
      $(".sub-nav").mouseleave(leave)
    })
  }
  render() {
    return (
      <NavBarWrapper>
        <nav class="navbar navbar-expand-sm navbar-light main-nav">
          <div class="container">
            <ul class="nav navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#/">
                  בית<span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item" data-target="#aroundTheYear">
                <a class="nav-link" href="#/aroundTheYear">
                  מעגל השנה
                </a>
              </li>
              <li class="nav-item" data-target="#tradition">
                <a class="nav-link" href="#/tradition">
                  מסורת ישראל
                </a>
              </li>
              <li class="nav-item" data-target="#artsAndCrafts">
                <a class="nav-link" href="#/artsAndCrafts">
                  אומנות ויצירה
                </a>
              </li>
              <li class="nav-item" data-target="#design">
                <a class="nav-link" href="#/design">
                  עיצוב
                </a>
              </li>
              <li class="nav-item" data-target="#writingTools">
                <a class="nav-link" href="#/writingTools">
                  כלי כתיבה
                </a>
              </li>
              <li class="nav-item" data-target="#game">
                <a class="nav-link" href="#/game">
                  משחק
                </a>
              </li>
              <li class="nav-item" data-target="#painting">
                <a class="nav-link" href="#/painting">
                  ציור
                </a>
              </li>
              <li class="nav-item" data-target="#kidsArtsAndCrafts">
                <a class="nav-link" href="#/kidsArtsAndCrafts">
                  יצירה לילדים
                </a>
              </li>
              <li class="nav-item" data-target="#summer">
                <a class="nav-link" href="#/summer">
                  קיץ
                </a>
              </li>
              <li class="nav-item" data-target="#camp">
                <a class="nav-link" href="#/camp">
                  קייטנה
                </a>
              </li>
              <li class="nav-item" data-target="#gifts">
                <a class="nav-link" href="#/gifts">
                  מתנות
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav class="navbar navbar-light sub-nav">
          <div class="container">
            <ul class="nav navbar-nav" id="aroundTheYear">
              <li class="nav-item">
                <Link to="/backToSchool">תחילת שנה</Link>
              </li>
              <li class="nav-item">
                <Link to="/kinderGarden">פינות בגן ילדים</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/learningSkills">
                  מרכזי למידה
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/decorative-art">
                  בוקר
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/ethnographica-tribal-art">
                  סתיו
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/fine-art">
                  יום המשפחה
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/fine-art-and-antiques">
                  זהירות בדרכים
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/furnature">
                  אורח חיים בריא
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  ניקיון
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  ירושלים
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  חיות
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  שלום כתה א
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  יום העצמאות
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  סיפורי ילדים בהמחשה
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  יום הולדת
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  חורף
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  גינה וירקות
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  פרדס ופירות הדר
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  אני וגופי/רגשות
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  אביב
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  חודשי השנה וימות השבוע
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  סוף שנה
                </a>
              </li>
            </ul>

            <ul class="nav navbar-nav" id="tradition">
              <li class="nav-item">
                <a class="nav-link" href="#/asian-art">
                  ראש השנה ויום כיפור
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/clocks-watches-and-jewellery">
                  שבועות
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/collectibles">
                  ל"ג בעומר וימי הספירה
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/decorative-art">
                  ט"ו בשבט
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/ethnographica-tribal-art">
                  שבת
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/fine-art">
                  מסיבת סידור
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/fine-art-and-antiques">
                  סוכות ושמחת תורה
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/furnature">
                  חנוכה
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  פסח
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  פורים
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  תורה
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles">
                  בריאת העולם
                </a>
              </li>
            </ul>

            <ul class="nav navbar-nav" id="artsAndCrafts">
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/vintage-fashion-and-textiles"></a>
              </li>
            </ul>
          </div>
        </nav>
      </NavBarWrapper>
    )
  }
}

const NavBarWrapper = styled.div`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background: {
      image: url("https://unsplash.it/800/600?image=998");
      repeat: no-repeat;
      size: cover;
    }
  }

  .navbar.main-nav,
  .navbar.sub-nav {
    position: relative;
    border-radius: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0.6);
    user-select: none;
    outline: 0;

    .nav-item {
      position: relative;
      padding: 0.25em 0;

      &,
      .nav-link {
        transition: color 0.5s ease;
      }

      &:hover .nav-link,
      &.hover .nav-link,
      &.active .nav-link {
        color: #0275d8;
      }
    }
  }

  .navbar.main-nav {
    border-bottom: 0.2em solid #0275d8;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2;

    .nav-item {
      &,
      .nav-link {
        color: #ccc;
      }

      &.active:after {
        display: block;
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 0.4em solid transparent;
        border-right: 0.4em solid transparent;
        border-bottom: 0.4em solid #0275d8;
        margin-left: -0.4em;
      }
    }
  }

  .navbar.sub-nav {
    position: absolute;
    margin-top: -0.1em;
    border-bottom: 0.1em solid #0275d8;
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    z-index: 1;

    .navbar-nav:not(.active) {
      display: none;
    }

    .nav-item,
    .nav-link {
      color: #333;
    }
  }
`
export default NavBar
