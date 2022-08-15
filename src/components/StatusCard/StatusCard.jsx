import "./StatusCard.css";
import { ReactComponent as ClockIcon } from "./clock.svg";
import { ReactComponent as StopWatch } from "./stopwatch.svg";
import { ReactComponent as TickIcon } from "./tick-2.svg";
import { ReactComponent as PencilIcon } from "./pencil-3.svg";
import { ReactComponent as CalendarIcon } from "./calendar.svg";

function StatusCard(props) {
  return (
    <div className="card ">
      
      <div className="border">
        <img src={props.img} />
      </div>
      <div className="card-body">
        <div className="title">
          <TickIcon />
          <span> {props.activity} </span>
           <StopWatch /> <span>  {props.durationTime} </span>
        </div>
        <div className="content">
          <PencilIcon /> 
          <span className="text">{props.textPost} </span>
        </div>
        <div className="content">
        <CalendarIcon/><span className="date">{props.datePost}</span>
        </div>
      </div>
      <img />
      
    </div>
  );
}

export default StatusCard;
