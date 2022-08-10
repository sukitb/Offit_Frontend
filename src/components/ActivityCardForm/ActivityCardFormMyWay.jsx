import React from 'react';
import { useForm } from 'react-hook-form';
import './ActivityCardFormMyWay.css'

function ActivityCardFormMyway() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-activity">

      <label className='label' htmlFor="activity">Activity:</label>  
      <input id="activity" type="text" placeholder="What's your today workout?" {...register("Activity", {required: true, maxLength: 40})} />
      
      
      <label className='label' htmlFor="style">Choose your styles:</label> 
      <div className='radio-input'> 
        <input {...register("Choose your style", { required: true })} type="radio" value="Do it my way" />Do it my way
        <input {...register("Choose your style", { required: true })} type="radio" value="Follow youtube" />Follow youtube
      </div>
      
      <input type="url" placeholder="Past your ref. URL here" {...register("Past your ref. URL here", {})} />
      
     

      <div className='img-radio'>
        <div><input {...register("image")} type="radio" value="../111.png" /><img src="../src/assets/run.jpg" alt="" width="60px" /></div>
        <div><input {...register("image")} type="radio" value="../112.png" /><img src="../src/assets/yoca.jpg" alt="" width="60px" /></div>
        <div><input {...register("image")} type="radio" value="../113.png" /><img src="../src/assets/imageCard.png" alt="" width="60px" /></div>
        <div><input {...register("image")} type="radio" value="/../114.png" /><img src="../src/assets/run.jpg" alt="" width="60px" /></div>
        <div><input {...register("image")} type="radio" value="../115.png" /><img src="../src/assets/run.jpg" alt="" width="60px" /></div>
        <div><input {...register("image")} type="radio" value="../116.png" /><img src="../src/assets/run.jpg" alt="" width="60px" /></div>
      </div>



      <div className='time'>
        <div className='time-in'>
            <label className='label' htmlFor="hours">⏱Hours:</label>
            <input id="hours" type="number" placeholder="Hours" {...register("Hours", {required: true, max: 23, min: 0})} />
        </div>
        <div className='time-in'>
            <label className='label' htmlFor="minutes">Minutes:</label>
            <input id="minutes" type="number" placeholder="Minutes" {...register("Minutes", {required: true, max: 59, min: 0})} />
        </div>
      </div>
      <input type="submit" value="CREATE" />
    </form>
  );
}

export default ActivityCardFormMyway;