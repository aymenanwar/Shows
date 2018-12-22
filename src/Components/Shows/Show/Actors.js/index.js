import React, { Fragment } from 'react'

export default ({ name, startDate, age }) =>
  <Fragment>
    <h4>
      {name} {age ? `(${age})` : ''}
    </h4>

    <p>
      {startDate ? startDate : <i>No Description</i>}
    </p>
  </Fragment>