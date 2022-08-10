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
      <select {...register("Do it my way", { required: true })}>
        <option value="run">🏁  Choose activity  🏁 </option>
        <option value="Run">🏃 Run</option>
        <option value="Yoga">💪 Fitness</option>
        <option value="Swimming">🏊 Swimming</option>
        <option value="Bike">🚴 Bike</option>
        <option value="Football">⚽ 🏐🥊🏸Football</option>
        <option value="Climbing">🧗 Climbing</option>
        <option value="Yoga">🧘 Yoga</option>
        <option value="Yoga">🚩 Custom</option>
      </select>
      

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