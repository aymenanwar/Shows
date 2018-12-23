import React, {Fragment} from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Show from './Show'
import {Grid} from '@material-ui/core'
import Menu from '../Layout/menu';



export default ({match: {url}, shows}) => 
  
    <Fragment>
        <Menu />
      <h1 className='list-title jumbotron '>Choose a show then scroll down for details</h1>
      <Grid className='shows-list'>
        <ul>
            {shows.map(({ id,title, image, country, rating }) =>
            <li key={id}>
                <div className="card">
                    <img className="card-img-top" src={image} alt="Card image cap" />
                    <div className="card-body">
                        <Link to={`${url}/${id}`} className="btn btn-dark card-title">{title}</Link>
                        <p className="card-text"><span className="badge badge-pill badge-dark">{country}</span><span className="badge badge-pill badge-dark">{rating}</span></p>
                        <Link to={`${url}/${id}`} className="btn btn-dark">Details</Link>
                    </div>
                </div>
            </li>
            )}
        </ul>
        <hr />
        
      </Grid>
      <Route path={`${url}/:id`} render={props =>{
          const show = shows.find(({ id }) => id === props.match.params.id)

          if(!show){
              return <NotFound />
          }
          return <Show {...props} {...show} />
      }
    }
    />

    
    </Fragment>
  

