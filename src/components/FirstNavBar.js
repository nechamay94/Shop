import React, {Component} from "react"
import {Link} from "react-router-dom"

class FirstNavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm navbar-light main-nav">
        <div class="container">
          <ul class="nav navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#/">
                התחבר/הרשם<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/categories">
                אודות
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/auctions">
                צור קשר
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/alerts">
                הגעה
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/prices">
                בלוג
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/help">
                מועדון
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/categories">
                יוטיוב
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default FirstNavBar
