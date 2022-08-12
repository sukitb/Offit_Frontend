import './StatusCard.css'

function StatusCard(props) {
    return (
        <div className='card '>
            <div className='border'>
                <img src={props.img} alt="hhhhh" />
            </div>
            <div className='card-body'>
                <h3 className='title'>{props.activity} , {props.durationTime}</h3>
                <p className='text'>{props.textPost} </p>
                <h6 className='date'><br />{props.datePost}</h6>
            </div>
            <img />
        </div>
    )
}

export default StatusCard;