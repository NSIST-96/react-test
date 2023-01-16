import React from "react"
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts"

const Profile = () =>{
    return <div className={classes.profile}>
        <img src="https://abc-decor.com/img/gallery/12/thumbs/thumb_l_PL35736.jpg" alt="img"></img>
        <p>Ava + name</p>
        <p>Info</p>
        <p>New post</p>
        <MyPosts />
    </div>
}

export default Profile