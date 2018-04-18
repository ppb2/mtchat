import React from 'react';
import AppBar from '../ui/AppBar/AppBar';
import * as color from '../Colors.js';
import SearchButton from '../ui/SearchButton/SearchButton';
var styleobj = {
    color: "blue",
    fontWeight: "normal"
  }
  var buttonstyle ={
    marginTop:'px2rem(65px)'
  }

const ContactContainer = ()=>{
    return <React.Fragment>
                <AppBar style={styleobj} themeColor={color.cyanA700} title='通讯录'></AppBar>
                <SearchButton style={buttonstyle}/>
           </React.Fragment>;
}
export default ContactContainer;