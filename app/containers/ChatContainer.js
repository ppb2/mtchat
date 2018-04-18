import React from 'react';
import AppBar from '../ui/AppBar/AppBar';
import * as color from '../Colors.js';
import ChatList from '../components/ChatList/ChatList'
var styleobj = {
    color: "blue",
    fontWeight: "normal"
  }
  
  const ChatContainer = () => {
    return <React.Fragment>
                <AppBar style={styleobj} themeColor={color.cyanA700} title='MChat'></AppBar>
                <ChatList />
           </React.Fragment>;
  }

  export default ChatContainer;