import React from 'react'
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityCardList.css'
import activityInfo from './ActivityInfo';



function CreateActivity(activityInfo) {

  // hotfix

  function VideoIdParse(url) {
  let re = /(https?:\/\/)?(((m|www)\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
  let VideoId = url.match(re)[7];
  }

    return ( 
    <ActivityCard 
        key={activityInfo.id}
        img={activityInfo.img}
        video=
        activity={activityInfo.activity}
        durationTime={activityInfo.durationTime}
        />
        )
}

function ActivityCardList() {
  return (
    <div className='activity-list'>
        {activityInfo.map(CreateActivity)}
    </div>
  )
}

export default ActivityCardList;