import React from "react"
import classes from "./Navbar.module.css"

const Navbar = () => {
    return <navbar className={classes.navbar}>
        <div className={classes.navbar_elements}>
            <a href="#">Profile</a>
            <a href="#">Messages</a>
            <a href="#">News</a>
            <a href="#">Music</a>
            <a href="#">Settings</a>
        </div>
    </navbar>
}

export default Navbar