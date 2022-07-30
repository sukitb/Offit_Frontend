import React, { useState } from "react";
import './EditProfileForm.css'

// detail
function EditProfileForm() {
  const [editProfile, seteditProfile] = useState({
    uName: "",
    weight: "",
    height: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    seteditProfile(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  // image
  
  const [img, setImg] = useState()
  function onImageChange(event) {
    const [file] = event.target.files;
    setImg(URL.createObjectURL(file));
  }


  return (
    <div className="box-form">
      <h1>
        Hello {editProfile.uName}</h1> <p>your BMI is  {editProfile.weight}</p>
      
   
      <form>
        <div>
          <img className="img-profile" src={img} alt="" />
          <input type="file" onChange={onImageChange} />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="uName"
            value= {editProfile.uName}
            placeholder="Username"
            type="text"
          />
          <input
            onChange={handleChange}
            name="weight"
            value={editProfile.weight}
            placeholder="Your weight"
            type="number"
          />
          <input
            onChange={handleChange}
            name="height"
            value={editProfile.height}
            placeholder="your height"
            type="number"
          />
          <button>EDIT</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;
