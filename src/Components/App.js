
import React, { Component } from 'react'
import '../App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Shows from './Shows';
import {NotFound} from './Errors'
import Layout from './Layout'
import Menu from'./Layout/menu'
import Show from './Shows/Show'
export default class  extends Component {

  state ={
    shows:[]
  }

  async componentDidMount(){
    const shows = await ( await fetch('http://localhost:3004/Shows?_embed=actors'))
    .json()
    this.setState({ shows })
  }


  render() {
    const { shows } = this.state
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Layout} />
          <Route  path='/Shows' render={  props =>
            <Shows {...props} shows={shows} />  
          } />
          
          <Route component={NotFound} />
          
        </Switch>

         
      </BrowserRouter>
    );
  }
}

