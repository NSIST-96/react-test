import React from "react"
import classes from "./Header.module.css"

const Header = () =>{
    return <header className={classes.header}>
      <div className={classes.header_items}>
        <img src="https://cs1.livemaster.ru/storage/6a/73/7459381c71880c2d331d5f4e50za--animal-toys-fox-sister-fox-felted-from-wool-toy-interior.jpg" alt="img"></img>
        <h1>Night Fox</h1>
      </div>
  </header>
}

export default Header