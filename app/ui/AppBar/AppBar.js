import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FontIcon from '../Icon/FontIcon'
import './AppBar.scss';
/**无状态组件 */
// const AppBar = (props)=>{
//     return <h1>Hello, {props.name} ,{props.color}</h1>;
// }



class AppBar extends React.Component{
    constructor(props){
        super(props); 
        
    }
    render(){
        return <div className='appbar'>
        <div className="appbar-item"></div>
        <div className="appbar-item" >{this.props.title}</div>
        <div className="appbar-item" ></div>
        </div>;
    }
   
}
AppBar.propTypes  = {
    themeColor:PropTypes.string,
    title:PropTypes.string,
    titleStyle:PropTypes.object,
    iconElementLeft:PropTypes.element,
    iconElementRight:PropTypes.element,
    iconStyleLeft:PropTypes.object,
    iconStyleRight:PropTypes.object,
    onLeftIconButtonClick:PropTypes.func,
    onRightIconButtonClick:PropTypes.func,
    style:PropTypes.object,
    // children: PropTypes.element.isRequired
}
export default AppBar;