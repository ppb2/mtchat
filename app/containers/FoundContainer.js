import React from 'react';
import AppBar from '../ui/AppBar/AppBar';
import * as color from '../Colors.js';
var styleobj = {
    color: "blue",
    fontWeight: "normal"
  }

const FoundContainer = ()=>{
    return <React.Fragment>
                <AppBar style={styleobj} themeColor={color.cyanA700} title='发现'></AppBar>
           </React.Fragment>;
}
export default FoundContainer;