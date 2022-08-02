import React from 'react'
import ActivityCard from '../ActivityCard/ActivityCard';
import './ActivityCardList.css'

function ActivityCardList() {

  const activityInfo = [
    {
        id: 1,
        img: "../src/assets/imageCard.png",
        video: "https://www.youtube.com/watch?v=-SSYX8sIOmM",
        activity: "yoca",
        durationTime: "3hr 5s",
       
    },
    {
        id: 2,
        img: "../src/assets/yoca.jpg",
        video: "",
        activity: "yoca2",
        durationTime: "1hr 5s",
    },
    {
        id: 3,
        img: "../src/assets/run.jpg",
        video: "https://www.youtube.com/embed/yMNLa17g9uc",
        activity: "yoca3",
        durationTime: "2hr 5s",
       
    }
]

  function youtube_parser(url){
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  return (
    <div className='activity-list'>

      {activityInfo.map(({id, img, video, activity, durationTime}) => (
        <ActivityCard id={id} img={img} video={youtube_parser(video)} activity={activity} durationTime={durationTime} />
      ))}
        
    </div>
  )
}

export default ActivityCardList;