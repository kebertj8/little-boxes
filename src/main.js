import React from "react"
import ReactDOM from "react-dom"
import Boxes from '.\\components\\Box'

import style from "./styles/app.scss"

import Wrapper from "./components/Wrapper"
let body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed" +
  "ullamcorper nibh, id efficitur eros. Suspendisse ultricies est ut mi" +
  "volutpat, quis faucibus sem malesuada. Pellentesque pellentesque ex at" +
  "posuere viverra. Nunc maximus massa nec lectus malesuada sodales. Lorem" +
  "ipsum dolor sit amet, consectetur adipiscing elit. Cras eget malesuada"  +
  "tortor."

let title = "I Am the Wrapper"

  ReactDOM.render(
  <div>
    <Boxes
      boxClass='wrapper'
      header={title}
      paragraph={body}
      picture={`https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png`}
    />
  </div>,
  document.getElementById("app")
)
