import React, { useState } from "react";
import './FormExercisePost.css'



function CreatePost(props) {

  const [makePost, setMakePost] = useState({
    activity: "Activity2",
    durationTime: "durationTime2",
    textPost:"",
    datePost:"datePost",
   
   
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMakePost(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  const [img, setImg] = useState('./111.png')
  function onImageChange(event) {
    const [file] = event.target.files;
    setImg(URL.createObjectURL(file));
  }

//   function submitPost(event) {
//     const date = new Date();
//     props.onAdd(makePost);
//     setMakePost({
//       activity: "",
//       durationTime: "",
//       textPost:"",
//       datePost: date.toLocaleTimeString(),
//       img:"./111.png"
//     });
//     event.preventDefault();
//   }

  


 

  return (
    <div className='form-post'>
        <h1>What's on your mind? </h1>

        <div className="post-form-middle">
            <p onChange={handleChange} > {makePost.activity} {makePost.durationTime}</p>
            <textarea className="form-texta" onChange={handleChange} name="textPost" id="" cols="30" rows="10" placeholder="What is your mind?" value={makePost.textPost}></textarea>

            <div className="image-post input-post" >  
                <label htmlFor="file-input" >
                    <img className="" src={img} alt="" />
                </label>
                <input name="img" type="file" id="file-input" onChange={onImageChange} />
            </div>
        </div>
        
        
        <button className="post-button"  >POST</button>
    </div>
  )
}

export default CreatePost;