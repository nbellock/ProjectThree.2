import React from "react";

import { Link } from "react-router";

class Main extends React.Component {

  render() {
    return (
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">Venue Finder</Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <LInk> in place of <a> and "to" in place of "href" */}
                  <li><Link to="/search">Search</Link></li>
                  <li><Link to="/saved">Saved Venues</Link></li>
                  <li><a href="https://github.com/marioaburto10/react-venue-finder">Github Repo</a></li>

                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <h2 className="text-center"><strong>(ReactJS) Venue Finder</strong></h2>
            <h3 className="text-center">Search for and save any venues near you.</h3>
          </div>


          {/* HEre will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
    )

  }
}

export default Main;