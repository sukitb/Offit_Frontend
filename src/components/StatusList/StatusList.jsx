import StatusCard from '../StatusCard/StatusCard'
import './StatusList.css'
import cardInfo from './PostInfo';

function createCard(cardInfo) {
    return (
        <StatusCard 
            key={cardInfo.id}
            img={cardInfo.img}
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