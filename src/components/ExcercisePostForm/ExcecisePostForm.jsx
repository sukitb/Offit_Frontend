import React, { useState } from 'react'
import './ExcercisePostForm.css'

function ExcecisePostForm(props) {
    const [post, setPost] = useState("")

    function handleChange(event) {
        const {name, value} = event.target;

        setPost(prevPost => {
            return {
                ...prevPost,
                [name]: value
            }
        })

    }

    function submitPost(event) {
        props.onAdd()
        event.preventDefault();
    }

  return (
    <div className='exe-card'>
        <h1 className='exc-title'>
            what's on your mind?
        </h1>
        
        <div className="exc-p">
            <p className=''>warm up body</p>
            <p className=''>10 mins</p>
        </div><br />
        <textarea type="text" 
            value={post.textPost}
            onChange={handleChange} /><br />
        
        <input type="file" /><br />
        <button onClick={submitPost}>POST</button>
    </div>
  )
}

export default ExcecisePostForm;