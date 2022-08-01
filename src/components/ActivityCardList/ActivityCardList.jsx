import React from 'react'
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityCardList.css'
import activityInfo from './ActivityInfo';



function CreateActivity(activityInfo) {
    return ( <ActivityCard 
        key={activityInfo.id}
        img={activityInfo.img}
        video={activityInfo.video}
        activity={activityInfo.activity}
        durationTime={activityInfo.durationTime}
        />)
}

function ActivityCardList() {
  return (
    <div className='activity-list'>
        {activityInfo.map(CreateActivity)}
    </div>
  )
}

export default ActivityCardList;