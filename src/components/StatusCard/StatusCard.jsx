import "./StatusCard.css";
import { ReactComponent as ClockIcon } from "./clock.svg";
import { ReactComponent as StopWatch } from "./stopwatch.svg";
import { ReactComponent as TickIcon } from "./tick-2.svg";
import { ReactComponent as PencilIcon } from "./pencil-3.svg";
import { ReactComponent as CalendarIcon } from "./calendar.svg";

function StatusCard(props) {
  return (
    <div className="status-card">
      
      <div className="card ">
      <div className="img-container">
        <img src={props.img} />
      </div>
        <div className="border"></div>
        <div className="card-body">
          <div className="title">
            <div>
              
              <h3> {props.activity} </h3>
            </div>
            <div>
               <h3> {props.durationTime} </h3>
            </div>
          </div>
          <div className="content">
            
            <span className="text">{props.textPost} </span>
          </div>
          <div className="content">
            
            <span className="date">{props.datePost}</span>
          </div>
        </div>
        <img />
      </div>
    </div>
  );
}

export default StatusCard;
