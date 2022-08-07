import React, { useState } from "react";
import './FormExercisePost.css'

function CreatPost() {
    return (
        <div className="formEx">
            <h1>What's on your mind?</h1>
            <div className="min">
                <p className="left">WARM UP BODY</p>
                <p className="right">10MINS</p>
            </div>


            <textarea
                name="content"
                placeholder="Take a note..."
                rows="3"
            />
            <input
                name="title"
                placeholder="Title"
                type='file'
            />

            <button className='post'>Post</button>

        </div>);
}
export default CreatPost;