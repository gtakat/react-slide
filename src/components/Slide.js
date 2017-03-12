import React from 'react'

const CONTENT = [
  <div className="App-slide">
    <div className="App-mainflame-header">1ぺーじ</div>
    <div className="App-mainflame-body">bbb</div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">2ぺーじ　</div>
    <div className="App-mainflame-body">bbdddb</div>
  </div>,

  <div className="App-slide">
    <div className="App-mainflame-header">3ぺーじ　</div>
    <div className="App-mainflame-body">bbdddb</div>
  </div>,
]

export const MAX_PAGE = CONTENT.length - 1

const Slide = (props) => (
  CONTENT[props.page]
)

export default Slide