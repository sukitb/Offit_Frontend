import "./StatusCard.css";
import { ReactComponent as ClockIcon } from "./clock.svg";
import { ReactComponent as StopWatch } from "./stopwatch.svg";

function StatusCard(props) {
  return (
    <div className="card ">
      <div className="border">
        <img src={props.img} />
      </div>
      <div className="card-body">
      
        <div className="title">
          <span>{props.activity}</span>
          <span>{props.durationTime}</span>
        </div>
        <span className="text">{props.textPost} </span>
        <span className="date">{props.datePost}</span>
      </div>
      <img />
    </div>
  );
}

export default StatusCard;
