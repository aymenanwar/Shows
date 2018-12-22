import React, {Fragment} from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../Errors'
import Show from './Show'
import {Grid} from '@material-ui/core'
import Menu from '../Layout/menu';



export default ({match: {url}, shows}) => 
  
    <Fragment>
        <Menu />
      <Grid className='shows-list'>
      <h3>Choose a show then scroll down for details</h3>
        <ul>
            {shows.map(({ id,title, image, subTitle, rating }) =>
            <li key={id}>
                <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title} <span className="badge badge-pill badge-light">{rating}</span></h5>
                <p className="card-text">{subTitle}</p>
                <Link to={`${url}/${id}`} className="btn btn-primary">Details</Link>
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
  

