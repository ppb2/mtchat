import React from 'react';
import ChatListItem from './ChatListItem';
import './ChatList.scss';
import SearchButton from '../../ui/SearchButton/SearchButton';
 const ChatList = ()=>{
     
    return  <div className='chatList'>
                <SearchButton/>
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
                
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
                <ChatListItem primaryText='James' secondaryText='hello james , ....' timeText='上午 10:48'/>
            </div>;
}

export default ChatList;
