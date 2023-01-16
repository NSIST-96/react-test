import React from "react"
import classes from "./Post.module.css"

const Post = (props) =>{
    return(
        <div className={classes.Post}>
            <img src="https://mobimg.b-cdn.net/v3/fetch/81/8189b923f97721e57c7ee1784bcecbc4.jpeg" alt="img" />
            {props.message}
            <div className="like">
                <span>Like: {props.likes_num}</span>
            </div>
        </div>
    )
}

export default Post