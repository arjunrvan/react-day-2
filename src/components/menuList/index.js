import React from 'react';
import classes from './menu.module.css';

class menuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: this.props.title,
            notiText: this.props.noti,
            icon: this.props.icon,
        };
    }

    render () {
        return (
            <div className = {classes.menu_holder}>
                {this.props.icon !== undefined && (
                    <img className = {classes.menu_icon} src = {this.state.icon} alt=''/>
                )}
                
                <p className = {classes.menu_text}>{this.state.titleText}</p>
                {/* {this.props.noti !== undefined && (
                    <p className = {classes.menu_noti}>{this.state.notiText}</p>
                )} */}
                
            </div>
        );
    }
}

export default menuList;