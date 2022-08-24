import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./ActivityCardList.css";

function ActivityCardList(props) {

  return (
    <div className="activity-list">
      {props.activityInfo.map(({ _id, image, youtubeUrl, title, duration }) => (
        <ActivityCard
          key={_id}
          id={_id}
          img={image}
          imgIndex={image}
          youtubeUrl={youtubeUrl}
          title={title}
          durationTime={duration}
          fetchActivities={props.fetchActivities}
          userInfo={props.userInfo}
        />
      ))}
    </div>
  );
}

export default ActivityCardList;
