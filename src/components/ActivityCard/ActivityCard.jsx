import React from 'react'
import YouTube from 'react-youtube';
import './ActivityCard.css'

function ActivityCard(props) {

  const opts = {
    heigth: '150',
    width: '225',}

  return (
    <div className='activity-card'>
        {props.video ? <YouTube opts={opts} videoId={props.video} /> : <img src={props.img} />}
        
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