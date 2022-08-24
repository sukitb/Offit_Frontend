import StatusCard from '../StatusCard/StatusCard'
import './StatusList.css'

function StatusList(props) {

    return (
        <div className='status-list'>
            
            {props.activityInfo.map( ( { _id, title, image, duration, post } ) =>
            (
                <StatusCard 
                key={_id}
                img={image}
                activity={title}
                durationTime={duration}
                post={post}
                />
            
            ) ) }

            
        </div>
    )
}

export default StatusList;