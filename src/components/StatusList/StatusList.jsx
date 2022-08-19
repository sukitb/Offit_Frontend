import StatusCard from '../StatusCard/StatusCard'
import './StatusList.css'
import cardInfo from './PostInfo'
import Running from '../../assets/activities-icon/Running.svg'


function createCard(cardInfo, props) {
    return (
        <StatusCard 
            key={cardInfo.id}
            img={Running}
            activity={cardInfo.activity}
            durationTime={cardInfo.durationTime}
            textPost={cardInfo.textPost}
            datePost={cardInfo.datePost} />
    )
}



function StatusList() {
    return (
        <div className='status-list'>
            
            {cardInfo.map(createCard)}
            
        </div>
    )
}

export default StatusList;