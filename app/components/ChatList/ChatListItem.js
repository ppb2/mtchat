import React from 'react';
import PropTypes from 'prop-types';
import './ChatListItem.scss';
import kerem from '../../static/kerem-128.jpg';
import uxceo from '../../static/uxceo-128.jpg';

 const ChatListItem = (props)=>{
     
    return <div className="chatListItem">
              <div > <img className='chatAvatar' src={kerem}/> </div>
             <div className="chatContent">
                 <p> {props.primaryText}</p>
                 <p> {props.secondaryText}</p>
             </div>
             <div className="chatNotify">
                 <div className="timeText">{props.timeText}</div>
                 <div> </div>
             </div>
             <div className="divider"/>
    </div>
}
ChatListItem.protoTypes = {
    primaryText : PropTypes.string,
    leftIcon:PropTypes.element,
    leftAvatar:PropTypes.element,
    secondaryText:PropTypes.string,
    timeText:PropTypes.string,
}
export default ChatListItem;
