import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './FootBar.scss';
import logo from './logo.png';
import FontIcon from '../Icon/FontIcon';
import {
    Link
  } from 'react-router-dom';
/**无状态组件 */




class FootBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentIndex: 1};
       
    }
    handleClick(e) {
        this.setState(prevState =>({
            currentIndex:e
        }))
      }
    checkstyle(index){
        return index==this.state.currentIndex ? 'footbar_item footbar_item_active' : 'footbar_item';
    }
    render() {
        
       
        return <div className='footbar'>
                   
                    <div className={this.checkstyle(1)}  onClick={(e) => this.handleClick(1)}>
                        <Link to="/"><FontIcon className="fa fa-comment-o"/></Link>
                    </div>
                    <div className={this.checkstyle(2)}  onClick={(e) => this.handleClick(2)}>
                        <Link to="/contact"> <FontIcon className="fa fa-user-o" /></Link>
                    </div>
                    <div className='footbar_item_center'>
                        <img className="icon" src={logo} />
                    </div>
                    <div className={this.checkstyle(3)}  onClick={(e) => this.handleClick(3)}>
                        <Link to="/found"> <FontIcon className="fa fa-lemon-o" /></Link>
                    </div>
                    <div className={this.checkstyle(4)}  onClick={(e) => this.handleClick(4)}>
                        <Link to="/my"><FontIcon className="fa fa-cube" /></Link>
                    </div>
        </div>;
    }

}
FootBar.propTypes = {

    onItemButtonClick: PropTypes.func,
 
    // children: PropTypes.element.isRequired
}
export default FootBar;