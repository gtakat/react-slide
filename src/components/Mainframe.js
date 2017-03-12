import React from 'react'
import Slide from '../containers/Slide'

const Mainframe = (props) => (
  <div className="App-mainflame">
    <div>{props.page}</div>
    <Slide />
  </div>
)

export default Mainframe