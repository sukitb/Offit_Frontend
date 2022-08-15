import React from 'react'
import './ActivityCard.css'

function ActivityCard(props) {

   
  return (
    <div className='activity-card'>
        {props.img && <img src={props.img} />}
        {props.video  && <iframe
       src={`https://www.youtube.com/embed/${props.video}`}
        title="YouTube video player" 
        max-width="250"
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}

        {/* <img src='./src/assets/imageCard.png' /> 
        <video src='' /> */}
        <div className=''>
            <p className='float-left'>{props.activity}</p>
            <p className='float-right'>{props.durationTime}</p>  
        </div>
        <button className='button-blue'>Done</button>
        <button className='button-green'>Add Post</button>
    </div>
  )
}

export default ActivityCard;