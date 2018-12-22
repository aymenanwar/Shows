import React from 'react'
import Menu from './menu'
export default function () {
  
  return (
    
    <div>
        <Menu />
        <div className="jumbotron container my-5 " style={{backgroundColor:"white"}}>
          <h1 className="display-1 center">Hello, world!</h1>
          <p className="lead">This is a simple SPA, displaying all time faviorite TV shows, with detailes.</p>
          <hr className="my-4" />
          <p>Built with react-app - react-router - JSON-Server - AJAX - CSS3 - Bootstrap4.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/Shows" role="button">Discover Shows</a>
          </p>
        </div>
    </div>
  )
}
