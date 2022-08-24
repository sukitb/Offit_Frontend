import "./StatusCard.css";
import { ActivityIcons } from "../Utils/ActivitiyIcons";

function StatusCard(props) {

  function secondsToHms(sec) {
    sec = Number(sec);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hr ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";

    return hDisplay + mDisplay;
  }

  return (
    <div className="status-card">
      <div className="card ">
        <div className="img-container">
          <img src={ActivityIcons[props.img]} />
        </div>
        <div className="border"></div>
        <div className="card-body">
          <div className="title">
            <div>
              <h3> {props.activity} </h3>
            </div>
            <div>
              <h3> {secondsToHms(props.durationTime)} </h3>
            </div>
          </div>

          {props.post.map(({ _id, postContent, createPostAt }) => (
            <div key={_id}>
              <div className="content">
                <p className="text">{postContent}</p>
              </div>
              <div className="content">
                <p className="date">{createPostAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
