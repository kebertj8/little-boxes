import React from "react"
import ReactDOM from "react-dom"

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
    <Wrapper body={body} title={title}/>
  </div>,
  document.getElementById("app")
)
