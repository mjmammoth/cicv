import React, { Component } from 'react'

import CV from 'mark-react-cv'
import { CVData } from './data';

export default class App extends Component {
  render () {
    return (
      <div>
        <CV {...CVData} />
      </div>
    )
  }
}
