import React from "react"
import classes from "./MyPosts.module.css"
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <div className="AddPost">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className="post">
                <Post message="Hi! How are you?" likes_num={10} />
            </div>
            <div className="post">
                <Post message="Hello! I'm fine, thanks =)" likes_num={20} />
            </div>
        </div>
    )
}

export default MyPosts