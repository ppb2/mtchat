import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './FontIcon.scss';

const FontIcon = (props)=>{
    if(props.color != undefined){
    props.style.color = props.color; }
    return  <i className={props.className} style={props.style} >  </i>;
}

FontIcon.propTypes  = {
    className:PropTypes.string,
    style:PropTypes.object,
    color: PropTypes.string,
}


export default FontIcon;