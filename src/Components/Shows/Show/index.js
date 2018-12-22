import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { NotFound } from '../../Errors'
import Actor from './Actors.js'


export default ({ match:{ url }, 
title, startDate, genre, image, desc, subTitle, writer, duration, rating, actor}) =>
<Fragment className='show-page' >
    <div className='container bg-light dark show'style={{backgroundImage:`${image}`}}>
        <div className='row'>
            <div className='col-md-5'>
                <img src={image} alt={title}  />
            </div>
            <div className='col-md-7'>
                <h1 className='title'>{title}</h1>
                <p className="sub-title">{subTitle}</p>
                <h6>{writer.map(data => 
                <li key={data.index} className='writer'>{data}</li>
                )} </h6>
                <p className='desc'>{desc}</p>

                <h5>Starring:</h5>
                    <ul>
                        {actor.map(data =>
                            <li key={data.index} className='actor'>
                            {data}
                            </li>
                        )}
                    </ul>

                <div className='show-info row'>
                    <div className='col-md-6'>
                        <h5>Release Date</h5>
                        <h3>{startDate}</h3>
                    </div>
                    <div className='col-md-6'>
                        <h5>Genre</h5>
                        <h3>{genre}</h3>
                    </div>
                    <div className='col-md-6'>
                        <h5>Rating</h5>
                        <h3>{rating}</h3>
                    </div>
                    <div className='col-md-6'>
                        <h5>Duration</h5>
                        <h3>{duration}</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</Fragment>